import { useState } from "react";
function MyMovies({list, user}) {
   
    return (
        <div className="MyMovies">
            <h2 className="counter"><b>{user}</b> has seen <b style={{"color": "red"}}>{list.length}</b> series</h2>
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