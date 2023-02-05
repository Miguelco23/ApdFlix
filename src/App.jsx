import './App.css';
import MyMovies from './components/MyMovies'
import AddSerieForm from './components/AddSerieForm';
import Header from './components/Header';

let mySeries = [
  { "name": "Naruto", "img": "https://i.imgur.com/LJd6LQu.jpeg" },
  { "name": "Naruto Shippuden", "img": "https://i.imgur.com/bmiCtQ9.png" },
  { "name": "Soul eater", "img": "https://upload.wikimedia.org/wikipedia/en/f/fe/Soul_Eater_manga_volume_1.jpg" },
  { "name": "No game no life", "img": "https://m.media-amazon.com/images/M/MV5BZTI1MjY3N2YtODczMy00MGQwLWI2NWMtODQwZTE3NTY5OTExXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg" },
  { "name": "Elite", "img": "https://m.media-amazon.com/images/M/MV5BYmU5N2YzYjQtM2Q4Yi00NWY4LWI5NDQtMzE4OTlhY2Q5NmJlXkEyXkFqcGdeQXVyMTMxNjUyMDkx._V1_.jpg" },
  { "name": "Sword art online", "img": "https://es.web.img3.acsta.net/pictures/19/07/09/11/04/5921608.jpg" },
  { "name": "Big mouth", "img": "https://images.justwatch.com/poster/257258766/s718/big-mouth.%7Bformat%7D" },
  { "name": "El robo del siglo", "img": "http://www.elespectadorimaginario.com/wp-content/webpc-passthru.php?src=http://www.elespectadorimaginario.com/wp-content/uploads/el_robo_del_siglo_1.jpg&nocache=1" },
  { "name": "Solar opposites", "img": "https://lumiere-a.akamaihd.net/v1/images/solar_opposites_4x5_las_e0333d41.png" },
  { "name": "Alice in borderland", "img": "https://flxt.tmsimg.com/assets/p18829068_b_h9_aa.jpg" },
  { "name": "Super campeones", "img": "https://www.tsubasa-dreamteam.com/assets/images/common/sp/top/main_video_cover-4-en@2x.jpg" },
  { "name": "Blue exorcist", "img": "https://cdn.myanimelist.net/images/anime/10/75195.jpg" },
  { "name": "Maniac", "img": "https://www.tvguide.com/a/img/catalog/provider/1/1/1-6535600661.jpg" },
  { "name": "Castlevania", "img": "https://es.web.img2.acsta.net/pictures/21/05/10/23/27/0599462.jpg" },
  { "name": "Devilman crybaby", "img": "https://m.media-amazon.com/images/M/MV5BZjYxMGRlZDAtYTU5Ny00NzhmLTgzYzgtNjNjNTZiZDQ5ZjU0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" },
  { "name": "B the beginning ", "img": "https://upload.wikimedia.org/wikipedia/en/4/42/B_the_Beginning_Main_Visual.jpg" },
  { "name": "One punch man", "img": "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/d8eed44e3d48097ab5fd36b6815fc18e.jpe" },
  { "name": "Rick y morty", "img": "https://r1.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic3.abc.es%2Fmedia%2Fseries%2F000%2F003%2F130%2Frick-y-morty-1.jpg&nuevoancho=683&medio=abc" },
  { "name": "Little witch academia", "img": "https://images.cdn1.buscalibre.com/fit-in/360x360/55/56/55563ba0608a3135e5251810146f1ae4.jpg" },
  { "name": "Tokyo Ghoul", "img": "https://es.web.img2.acsta.net/pictures/15/11/04/15/59/314681.jpg" },
  { "name": "7 pecados capitales", "img": "https://flxt.tmsimg.com/assets/p12296875_b_v9_aa.jpg" },
  { "name": "Los Simpsons", "img": "https://depor.com/resizer/2ZrnS5PYqG0W2zEHqVj7ccQHx7A=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BXOCB2SGV5DDLKSKXHCNTDZPDI.jpg" },
  { "name": "Bojackn Horseman", "img": "https://m.media-amazon.com/images/M/MV5BYWQwMDNkM2MtODU4OS00OTY3LTgwOTItNjE2Yzc0MzRkMDllXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" },
  { "name": "Final space", "img": "https://m.media-amazon.com/images/M/MV5BODRjZGY3ZDktZGIxOC00MWUzLTg1N2EtNDM1NTQ2ZTkxYjc1XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg" },
  { "name": "Love death & robots", "img": "https://m.media-amazon.com/images/M/MV5BYTNiYTNkNTAtYzE3ZS00ZDQ1LWEwZTYtZjI1NzYzMWJjY2U4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg" },
  { "name": "Hellsing", "img": "https://m.media-amazon.com/images/M/MV5BZTkyNjA0YTItNTBmNC00ZjFiLTg0YWItOGQ4NGZkMmQ4NDI0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg" },
  { "name": "Mirai Nikk", "img": "https://http2.mlstatic.com/D_NQ_NP_690878-MCO49516513841_032022-O.jpg" },
  { "name": "Los juegos del calamar", "img": "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg" }
];

let apdSeries = [
  { "name": "Dahmer", "img": "" },
  { "name": "3%", "img": "" },
  { "name": "Suits", "img": "" },
  { "name": "Papito", "img": "" },
  { "name": "La casa de papel", "img": "" },
  { "name": "Bienvenidos a Eden", "img": "" },
  { "name": "Capitani", "img": "" },
  { "name": "El diablo en Ohio", "img": "" },
  { "name": "How to get away with murder", "img": "" },
  { "name": "El inocente", "img": "" },
  { "name": "Maldición de Bly minor", "img": "" },
  { "name": "Misa de media noche", "img": "" },
  { "name": "Sweet tooth", "img": "" },
  { "name": "Lupin", "img": "" },
  { "name": "Death note", "img": "" },
  { "name": "Anohana", "img": "" },
  { "name": "El Caso Hartung", "img": "" },
  { "name": "Brack mirror", "img": "" },
  { "name": "Ratchet", "img": "" },
  { "name": "Parasite", "img": "" },
  { "name": "Fate Winx", "img": "" },
  { "name": "Sandman", "img": "" },
  { "name": "Está mierda me supera", "img": "" },
  { "name": "Arcane", "img": "" },
  { "name": "Sabes quién es", "img": "" },
  { "name": "Archivo 81", "img": "" },
  { "name": "Yo nunca", "img": "" },
  { "name": "Estamos muertos", "img": "" },
  { "name": "Los asesinatos de Valhala", "img": "" },
  { "name": "La dama de los muertos", "img": "" },
  { "name": "Only murders in the building", "img": "" },
  { "name": "Recreo", "img": "" },
  { "name": "Pablo Escobar", "img": "" },
  { "name": "The end of the fucking world", "img": "" },
  { "name": "Black mirror", "img": "" },
  { "name": "Alguien está mintiendo", "img": "" },
  { "name": "Merlina", "img": "" },
  { "name": "Sex education", "img": "" }
]

function App() {
  return (
    <div className="App">
      <Header />

      <MyMovies list={mySeries} user="Miguel" />

      <div className="lines" />

      <AddSerieForm />
    </div>
  );
}

export default App;
