import "./styles/MyMovies.css";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

function MyMovies({ list, user }) {
    

    return (


        <div className="MyMovies">
            <div className="series-grid">
                {list.map((serie, index) => {
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