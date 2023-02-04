import { useState } from "react";
function MyMovies({list}) {
   
    return (
        <div className="MyMovies">
            <header>
                <h1>ApdFlix</h1>
                <h2>Miguel has seen {list.length} series</h2>
                <a className="btn btn-success" href="#addSerieForm" id="header-button">Add a new serie</a>
            </header>
            <div className="series-grid">
                {list.map((serie, index) => {
                    return (
                        <div className="card" key={index}>
                            <img src={serie.img} className="card-img-top" alt={serie.name} />
                            <div className="card-body">
                                <h5 className="card-title">{serie.name}</h5>
                            </div>
                        </div>
                    );
                })
                }
            </div>  
        </div>
    );
}

export default MyMovies;