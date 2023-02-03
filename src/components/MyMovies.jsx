import { useState } from "react";
function MyMovies() {
    let mySeries = [
        { "id": 1, "name": "Naruto", "img": "https://i.imgur.com/LJd6LQu.jpeg" },
        { "id": 2, "name": "Naruto Shippuden", "img": "https://i.imgur.com/bmiCtQ9.png" },
        { "id": 3, "name": "Soul eater", "img": "https://upload.wikimedia.org/wikipedia/en/f/fe/Soul_Eater_manga_volume_1.jpg" },
        { "id": 4, "name": "No game no life", "img": "https://m.media-amazon.com/images/M/MV5BZTI1MjY3N2YtODczMy00MGQwLWI2NWMtODQwZTE3NTY5OTExXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg" },
        { "id": 5, "name": "Elite", "img": "https://m.media-amazon.com/images/M/MV5BYmU5N2YzYjQtM2Q4Yi00NWY4LWI5NDQtMzE4OTlhY2Q5NmJlXkEyXkFqcGdeQXVyMTMxNjUyMDkx._V1_.jpg" },
        { "id": 6, "name": "Sword art online", "img": "https://es.web.img3.acsta.net/pictures/19/07/09/11/04/5921608.jpg" },
        { "id": 7, "name": "Big mouth", "img": "https://images.justwatch.com/poster/257258766/s718/big-mouth.%7Bformat%7D" },
        { "id": 8, "name": "El robo del siglo", "img": "http://www.elespectadorimaginario.com/wp-content/webpc-passthru.php?src=http://www.elespectadorimaginario.com/wp-content/uploads/el_robo_del_siglo_1.jpg&nocache=1" },
        { "id": 9, "name": "Solar opposites", "img": "" },
        { "id": 10, "name": "Alice in borderland", "img": "" },
        { "id": 11, "name": "Super campeones", "img": "" },
        { "id": 12, "name": "Blue exorcist", "img": "" },
        { "id": 13, "name": "Maniac", "img": "" },
        { "id": 14, "name": "Castlevania", "img": "" },
        { "id": 15, "name": "Devilman crybaby", "img": "" },
        { "id": 16, "name": "B the beginning ", "img": "" },
        { "id": 17, "name": "One punch man", "img": "" },
        { "id": 18, "name": "Rick y morty", "img": "" },
        { "id": 19, "name": "Little witch academia", "img": "" },
        { "id": 20, "name": "Tokyo Ghoul", "img": "" },
        { "id": 21, "name": "7 pecados capitales", "img": "" },
        { "id": 22, "name": "Los Simpsons", "img": "" },
        { "id": 23, "name": "Bojackn Horseman", "img": "" },
        { "id": 24, "name": "Final space", "img": "" },
        { "id": 25, "name": "Love death & robots", "img": "" },
        { "id": 26, "name": "Hellsing", "img": "" },
        { "id": 27, "name": "Mirai Nikk", "img": "" },
        { "id": 28, "name": "Los juegos del calamar", "img": "" }
    ];

    const [series, setSeries] = useState(mySeries);

    const addSerie = () => {

    }





    return (
        <div className="MyMovies">
            <h1>Series Miguel</h1>
            <h2>You have seen {series.length} series</h2>
            <a className="btn btn-success" href="#addSerieForm">Add serie</a>
            <div className="series-grid">
                {series.map((serie, index) => {
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
            <div id="addSerieForm">
                <button id="addSerie" className="btn btn-success" onClick={addSerie}>Add serie</button>
            </div>
        </div>
    );
}

export default MyMovies;