import "./styles/MyMovies.css";
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import ReactStars from "react-stars";

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
                {counter()}

                <button type="button" className="btn btn-success new-serie" data-bs-toggle="modal" data-bs-target="#modalForm">
                    New serie
                </button>

            <div className="series-grid">
                {array.map((serie, index) => {
                    return (
                        <Link to={{
                            pathname: ("./" + serie.name.replace(/ /g, "_").replace("%", "_porciento"))
                        }} key={index} id={serie.name.replace(/ /g, "_")} className="card-link">
                            <div className="card little-card" >
                                <img src={serie.img} className="card-img-top" alt={serie.name} />
                                <div className="card-body">
                                    <div className="card-title"><b>{serie.name}</b></div>
                                    <ReactStars
                                        classNames="stars"
                                        count={5}
                                        value={serie.rate}
                                        edit={false}
                                        size={20}
                                        activeColor="#ffd700"
                                        isHalf={true}
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