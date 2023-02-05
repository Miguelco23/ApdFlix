import './App.css';
import MyMovies from './components/MyMovies';
import AddSerieForm from './components/AddSerieForm';
import Header from './components/Header';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function App() {
  const [db, setDb] = useState({});
  const user = useParams().user;

  // eslint-disable-next-line
  const ApiUrl = ("https://apdflix-0627-default-rtdb.firebaseio.com/" + user + "/" + ".json");

  const getApi = (url) => {
    axios.get(url)
      .then(response => { setDb(response.data); });
  };

  getApi(ApiUrl);
  

  return (
    <div className="App">
      <Header />

      <MyMovies list={db} user={user} />

      {/* <div className="lines" /> */}

      <AddSerieForm />
    </div>
  );
}

export default App;
