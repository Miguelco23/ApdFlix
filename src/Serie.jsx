import Header from "./components/Header";
import ReactStars from "react-rating-stars-component";
import "./serie.css";


function Serie({ serie }) {
    return (
        <div className="Serie">
            <Header />
            <div className="review-box container-fluid">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://i.imgur.com/LJd6LQu.jpeg" className="img-fluid rounded-start card-img" alt="{serie}" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title">{serie}</h1>
                                <p className="card-text review">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolore consequuntur sapiente mollitia possimus, ipsum ex voluptates quae iusto labore aut ratione iste laboriosam perferendis esse fuga ullam iure nulla.</p>
                                <div className="rating-container">
                                    <p className="card-text rating"><small className="text-muted">Rate: </small></p>
                                    <ReactStars
                                        classNames="stars"
                                        count={5}
                                        value={5}
                                        edit={false}
                                        size={40}
                                        activeColor="#ffd700"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Serie;