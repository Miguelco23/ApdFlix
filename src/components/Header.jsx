import "./styles/Header.css";
import { Link } from "react-router-dom"
import Logo  from "../assets/images/logo-noletras.png";


function Header() {
    return (
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
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-dark" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>


    );
}

export default Header;