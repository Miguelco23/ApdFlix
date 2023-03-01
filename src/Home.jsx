import { Link } from 'react-router-dom';
import "./Home.css";
import Logo from "./assets/images/logo.png";


function Home() {
    return (
        <div className="Home">
            <div className="card home-card">
                <img src={Logo} className="card-img-top" id='home-img' alt="..." />
                <div className="card-body">
                    <div id="buttons">
                        <div className="row">
                            <div className="col"><Link to={"./apdSeries"} className="btn btn-outline-dark btn-lg btn-home">Apd's Series</Link></div>
                            <div className="col"><Link to={"./apdMovies"} className="btn btn-outline-dark btn-lg btn-home">Apd's Movies</Link></div>
                        </div>
                        <div className="row">
                            <div className="col"><Link to={"./miguelSeries"} className="btn btn-outline-dark btn-lg btn-home">Miguel's Series</Link></div>
                            <div className="col"><Link to={"./anaSeries"} className="btn btn-outline-dark btn-lg btn-home">Ana's Series</Link></div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Home;