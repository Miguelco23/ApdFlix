function Header() {
    return (
        <div className="Header">
            <nav className="navbar fixed-top navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="./">
                        <img src="https://i.imgur.com/hDAUSpp.png" alt="ApdFlix" width="70" height="70" class="d-inline-block align-text-top" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Choose user 
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><a className="dropdown-item" href="#">APD</a></li>
                                    <li><a className="dropdown-item" href="#">Miguel</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>


    );
}

export default Header;