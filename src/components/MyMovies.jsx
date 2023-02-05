import "./styles/MyMovies.css";
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import ReactStars from "react-rating-stars-component";

function MyMovies({ list, user }) {



    let array = [];
    for (let serie in list) {
        array.push(list[serie]);

    }





    const counter = () => {
        if (user === "miguelSeries") {
            return (<h2 className="counter"><b>Miguel</b> has seen <b style={{ "color": "red" }}><CountUp end={array.length} duration={1.5} /></b> series</h2>)
        } else {
            return (<h2 className="counter"><b>Ana & Miguel</b> have seen <b style={{ "color": "red" }}><CountUp end={array.length} duration={1.5} /></b> series together</h2>)
        }
    };

    return (


        <div className="MyMovies">
            <div className="user-count">
                {counter()}
                <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalForm">
                    Have you seen a new serie?
                </button>
            </div>
            <div className="series-grid">
                {array.map((serie, index) => {
                    return (
                        <Link to={{
                            pathname: ("./" + serie.name.replace(/ /g, "_").replace("%", "_porciento"))
                        }} key={index} className="card-link">
                            <div className="card little-card">
                                <img src={serie.img} className="card-img-top" alt={serie.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{serie.name}</h5>
                                    <ReactStars
                                        classNames="stars"
                                        count={5}
                                        value={serie.rate}
                                        edit={false}
                                        size={20}
                                        activeColor="#ffd700"
                                    />
                                </div>
                            </div>
                        </Link>
                    );
                })
                }
            </div>
        </div>
    );
}

export default MyMovies;