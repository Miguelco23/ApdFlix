import { Link } from 'react-router-dom';
import "./Home.css";

function Home() {
    return (
        <div className="Home">
            <img src="https://i.imgur.com/hDAUSpp.png" alt="" />
            <h2>Series... Series everywhere</h2>
            <div class="d-grid gap-2" id="buttons">
                <Link to={"/apdSeries"} className="btn btn-outline-dark btn-lg">Apd Series</Link>
                <Link to={"/miguelSeries"} className="btn btn-outline-dark btn-lg">Miguel Series</Link>
            </div>

        </div >
    )
}

export default Home;