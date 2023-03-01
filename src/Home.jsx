import { Link } from 'react-router-dom';
import "./Home.css";
import Logo from "./assets/images/logo.png";


function Home() {
    return (
        <div className="Home">
            <div className="card home-card">
                <img src={Logo} className="card-img-top" id='home-img' alt="..." />
                <div className="card-body">
                    <div className="d-grid gap-2" id="buttons">
                        <Link to={"./apdSeries"} className="btn btn-outline-dark btn-lg">Apd's Series</Link>
                        <Link to={"./apdMovies"} className="btn btn-outline-dark btn-lg">Apd's Movies</Link>
                        <Link to={"./miguelSeries"} className="btn btn-outline-dark btn-lg">Miguel's Series</Link>
                        <Link to={"./anaSeries"} className="btn btn-outline-dark btn-lg">Ana's Series</Link>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Home;