import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import ReactStars from "react-stars";
import { Link } from "react-router-dom"
import Logo  from "./assets/images/logo-noletras.png";


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

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };







    return (
        <div className="Serie">
               <div className="Header">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/ApdFlix/"}>
                        <img src={Logo} alt=""/>
                        ApdFlix
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle btn" data-bs-toggle="dropdown" aria-expanded="false">
                                    Series lists
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={"/ApdFlix/apdSeries"}>Apd's series</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to={"/ApdFlix/miguelSeries"}>Miguel's series</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
            <button type="button" className="btn btn-danger btn-lg" id="back-button" onClick={goBack}><i className="fa-solid fa-arrow-left"></i></button>
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