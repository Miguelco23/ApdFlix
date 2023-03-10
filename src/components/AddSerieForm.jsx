import "./styles/Form.css";
import { useState } from "react";
import ReactStars from "react-stars";
import axios from "axios";

function AddSerieForm({ url }) {
    const [newSerie, setNewSerie] = useState({ name: "", img: "", review: "", rate: 0 });


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
        if (newSerie.name === "" || newSerie.img === "" || newSerie.review === "") {
            alert("Debes completar todos los campos");
        } else {
            let postName = newSerie.name.replace(/ /g, "_");
            axios.put(url + postName + ".json", { name: newSerie.name, img: newSerie.img, review: newSerie.review, rate: newSerie.rate }).then((res) => { })
                .catch(error => { alert("Error al insertar serie en la base de datos: " + error); });

            setTimeout(function () {
                scrollTo(newSerie.name.replace(/ /g, "_"));
                setNewSerie({ name: "", img: "", review: "", rate: 0 });
            }, 1000);
        }


    }

    return (
        <div className="AddSerieForm form" id="AddForm">
            <div class="modal fade" id="modalForm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Add a new serie</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                        </div>
                        <form>
                            <div class="modal-body">
                                <div className="form-floating mb-3">
                                    <input type="text" name="name" className="form-control" id="floatingInput" value={newSerie.name} onChange={handleInputs} />
                                    <label htmlFor="floatingInput">Serie's name</label>
                                </div>
                                <div className="form-floating">
                                    <input type="text" name="img" className="form-control" id="floatingPassword" value={newSerie.img} onChange={handleInputs} />
                                    <label htmlFor="floatingPassword">Image's link</label>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-text">Serie's review</span>
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

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
                                <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={addSerie}>Add serie</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddSerieForm;