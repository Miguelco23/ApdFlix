import "./styles/MyMovies.css";
import { Link } from "react-router-dom";
function MyMovies({ list, user }) {

    return (
        <div className="MyMovies">
            <div className="user-count">
                <h2 className="counter"><b>{user}</b> has seen <b style={{ "color": "red" }}>{list.length}</b> series</h2>
                <a href="#AddForm" className="btn btn-success">Add a new serie</a>
            </div>
            <div className="series-grid">
                {list.map((serie, index) => {
                    return (
                        <Link to={"/" + serie.name} key={index} className="card-link">
                            <div className="card little-card">
                                <img src={serie.img} className="card-img-top" alt={serie.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{serie.name}</h5>
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