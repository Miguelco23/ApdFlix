import "./styles/Form.css";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";

function AddSerieForm() {
    const [newSerie, setNewSerie] = useState({ name: "", img: "", review: "", rate: 0 });


    const handleInputs = (event) => {
        const { name, value } = event.target;

        setNewSerie((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const newRating = (newRate) => {
        setNewSerie((prev) => {
            return {...prev, rate: newRate };
            
        });
    };

    const addSerie = (event) => {
        alert(`Name: ${newSerie.name} \nImg: ${newSerie.img} \nReview: ${newSerie.review} \nRate: ${newSerie.rate}`);
    }
    return (
        <div className="AddSerieForm form" id="AddForm">
            <label htmlFor="addSerieForm"><h3>Add a new serie</h3></label>
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
            <button id="addSerie" className="btn btn-outline-success" onClick={addSerie}>Add new serie</button>
        </div>
    );
}

export default AddSerieForm;