import Header from "./components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import ReactStars from "react-stars";


import "./serie.css";


function Serie() {
    const [serie, setSerie] = useState({});
    const { serieName, userName } = useParams();


    const ApiUrl = "https://apdflix-0627-default-rtdb.firebaseio.com/" + userName + "/" + serieName + ".json";



    const getApi = (url) => {
        axios.get(url)
            .then(response => { setSerie(response.data); });
    };

    getApi(ApiUrl);







    return (
        <div className="Serie">
            <Header />
            <div className="review-box container-fluid">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={serie.img} className="img-fluid rounded-start card-img" alt={serie.name} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title">{serie.name}</h1>
                                <p className="card-text review">{serie.review}</p>
                                <div className="rating-container">
                                    <p className="card-text rating"><div className="text-muted">Rate: </div></p>
                                    <ReactStars
                                        value={serie.rate}
                                        count={5}
                                        edit={false}
                                        activeColor="#ffd700"
                                        isHalf={true}
                                        size={30}
                                     />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Serie;