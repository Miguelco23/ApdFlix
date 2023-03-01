import "./styles/Form.css";
import { useState } from "react";
import ReactStars from "react-stars";
import axios from "axios";

function AddMovieForm({ url }) {
    const [newSerie, setNewSerie] = useState({ name: "", img: "", review: "", rate: 0, date: "", anaSleep: false });

    const handleInputs = (event) => {
        const { name, value } = event.target;

        setNewSerie((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const newRating = (newRate) => {
        setNewSerie((prev) => {
            return { ...prev, rate: newRate };

        });
    };

    const handleCheckbox = () => {
        setNewSerie((prev) => {
            return { ...prev, anaSleep: !prev.anaSleep };
        });
    };

    const handleClose = () => {
        setNewSerie({ name: "", img: "", review: "", rate: 0 });
    };
    const scrollTo = (id) => {
        console.log(id);
        let element = document.getElementById(id);
        console.log(element);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.log("Element not found");
        }
    };

    const addSerie = () => {
        if (newSerie.name === "" || newSerie.img === "" || newSerie.review === "" || newSerie.date === "") {
            alert("Debes completar todos los campos");
        } else {
            let postName = newSerie.name.replace(/ /g, "_");
            axios.put(url + postName + ".json", { name: newSerie.name, img: newSerie.img, review: newSerie.review, rate: newSerie.rate, date: newSerie.date, anaSleep: newSerie.anaSleep }).then((res) => { })
                .catch(error => { alert("Error al insertar serie en la base de datos: " + error); });

            setTimeout(function () {
                scrollTo(newSerie.name.replace(/ /g, "_"));
                setNewSerie({ name: "", img: "", review: "", rate: 0, date: "", anaSleep: false });
            }, 1000);
        }


    }

    return (
        <div className="AddMovieForm form" id="AddForm">
            <div className="modal fade" id="modalForm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add a new Movie</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                        </div>
                        <form>
                            <div className="modal-body">
                                <div className="form-floating mb-3">
                                    <input type="text" name="name" className="form-control" id="floatingInput" value={newSerie.name} onChange={handleInputs} />
                                    <label htmlFor="floatingInput">Movie's name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" name="img" className="form-control" id="floatingPassword" value={newSerie.img} onChange={handleInputs} />
                                    <label htmlFor="floatingPassword">Image's link</label>
                                </div>
                                <div className="form-floating">
                                    <input type="text" name="date" className="form-control" id="floatingInput" value={newSerie.date} onChange={handleInputs} />
                                    <label htmlFor="floatingInput">Movie's date</label>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text">Movie's review</span>
                                    <textarea className="form-control" name="review" aria-label="With textarea" value={newSerie.review} onChange={handleInputs} />
                                </div>

                                <ReactStars
                                    value={newSerie.rate}
                                    name="rate"
                                    count={5}
                                    onChange={newRating}
                                    size={50}
                                    isHalf={true}
                                    activeColor="#ffd700"
                                />
                                <div className="input-group">
                                    <span id="checkId">Did Ana sleep?</span>
                                    <input className="form-check-input" type="checkbox" name="anaSleep" id="anaSleep" value={newSerie.anaSleep} onChange={handleCheckbox} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
                                <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={addSerie}>Add Movie</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddMovieForm;