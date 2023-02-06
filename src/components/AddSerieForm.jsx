import "./styles/Form.css";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
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

    const addSerie = () => {
        console.log(newSerie);
        let postName = newSerie.name.replace(/ /g, "_");
        console.log(postName);
        console.log(url + postName);

        alert(` Se guardo la serie:\nName: ${newSerie.name} \nImg: ${newSerie.img} \nReview: ${newSerie.review} \nRate: ${newSerie.rate}`);
        axios.put(url + postName+".json", {name: newSerie.name, img: newSerie.img, review: newSerie.review, rate: newSerie.rate}).then((res) => { })
            .catch(error => { alert("Error al insertar serie en la base de datos: " + error); });


    }
    return (
        <div className="AddSerieForm form" id="AddForm">
            <div class="modal fade" id="modalForm" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Add a new serie</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="form-floating mb-3">
                                <input type="text" name="name" className="form-control" id="floatingInput" placeholder="Game on thrones" onChange={handleInputs} />
                                <label htmlFor="floatingInput">Serie's name</label>
                            </div>
                            <div className="form-floating">
                                <input type="text" name="img" className="form-control" id="floatingPassword" placeholder="image link" onChange={handleInputs} />
                                <label htmlFor="floatingPassword">Image's link</label>
                            </div>
                            <div className="input-group">
                                <span className="input-group-text">Serie's review</span>
                                <textarea className="form-control" name="review" aria-label="With textarea" onChange={handleInputs} />
                            </div>
                            <ReactStars
                                name="rate"
                                count={5}
                                onChange={newRating}
                                size={50}
                                isHalf={true}
                                activeColor="#ffd700"
                            />

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success" onClick={addSerie}>Add serie</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddSerieForm;