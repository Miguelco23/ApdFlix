import { Link } from "react-router-dom"

function NoFound() {
    return (
        <div className="NoFound">
            <h1>Page not founded ☹</h1>
            <Link to={"/ApdFlix"}>
                <button className="btn btn-danger btn-lg">Go home</button>
            </Link>
        </div>
    );
}

export default NoFound;