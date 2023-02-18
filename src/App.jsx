import './App.css';
import MyMovies from './components/MyMovies';
import AddSerieForm from './components/AddSerieForm';
import axios from "axios";
import { useState } from "react";
import "./components/styles/Header.css";
import { Link } from "react-router-dom"
import Logo  from "./assets/images/logo-noletras.png";
import CountUp from 'react-countup';

function App(userName) {
  const [db, setDb] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const user = userName.user;
  




  // eslint-disable-next-line
  const ApiUrl = ("https://apdflix-0627-default-rtdb.firebaseio.com/"+user+"/");
  

  const getApi = (url) => {
    axios.get(url)
      .then(response => { setDb(response.data); })
      .catch(error => { alert("Error al leer la base de datos: "+error); });
      
  };

  getApi(ApiUrl + ".json");

  let array = [];
  for (let serie in db) {
      array.push(db[serie]);
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredArray = array.filter(serie => serie.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const counter = () => {
    if (user === "miguelSeries") {
        return (<h2 className="counter"><b>Miguel</b> has seen <b style={{ "color": "red" }}><CountUp end={array.length} duration={1.5} /></b> series</h2>)
    } else {
        return (<h2 className="counter"><b>Ana & Miguel</b> have seen <b style={{ "color": "red" }}><CountUp end={array.length} duration={1.5} /></b> series together</h2>)
    }
};


  

  return (
    <div className="App">
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
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} value={searchTerm}/>
                        </form>
                    </div>
                </div>
            </nav>
        </div>

        {counter()}

      <MyMovies list={filteredArray} user={user} />

      {/* <div className="lines" /> */}

      <AddSerieForm url={ApiUrl} />
    </div>
  );
}

export default App;
