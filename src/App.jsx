import './App.css';
import MyMovies from './components/MyMovies'
import AddSerieForm from './components/AddSerieForm';

let mySeries = [
  { "id": 1, "name": "Naruto", "img": "https://i.imgur.com/LJd6LQu.jpeg" },
  { "id": 2, "name": "Naruto Shippuden", "img": "https://i.imgur.com/bmiCtQ9.png" },
  { "id": 3, "name": "Soul eater", "img": "https://upload.wikimedia.org/wikipedia/en/f/fe/Soul_Eater_manga_volume_1.jpg" },
  { "id": 4, "name": "No game no life", "img": "https://m.media-amazon.com/images/M/MV5BZTI1MjY3N2YtODczMy00MGQwLWI2NWMtODQwZTE3NTY5OTExXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg" },
  { "id": 5, "name": "Elite", "img": "https://m.media-amazon.com/images/M/MV5BYmU5N2YzYjQtM2Q4Yi00NWY4LWI5NDQtMzE4OTlhY2Q5NmJlXkEyXkFqcGdeQXVyMTMxNjUyMDkx._V1_.jpg" },
  { "id": 6, "name": "Sword art online", "img": "https://es.web.img3.acsta.net/pictures/19/07/09/11/04/5921608.jpg" },
  { "id": 7, "name": "Big mouth", "img": "https://images.justwatch.com/poster/257258766/s718/big-mouth.%7Bformat%7D" },
  { "id": 8, "name": "El robo del siglo", "img": "http://www.elespectadorimaginario.com/wp-content/webpc-passthru.php?src=http://www.elespectadorimaginario.com/wp-content/uploads/el_robo_del_siglo_1.jpg&nocache=1" },
  { "id": 9, "name": "Solar opposites", "img": "https://lumiere-a.akamaihd.net/v1/images/solar_opposites_4x5_las_e0333d41.png" },
  { "id": 10, "name": "Alice in borderland", "img": "https://flxt.tmsimg.com/assets/p18829068_b_h9_aa.jpg" },
  { "id": 11, "name": "Super campeones", "img": "https://www.tsubasa-dreamteam.com/assets/images/common/sp/top/main_video_cover-4-en@2x.jpg" },
  { "id": 12, "name": "Blue exorcist", "img": "https://cdn.myanimelist.net/images/anime/10/75195.jpg" },
  { "id": 13, "name": "Maniac", "img": "https://www.tvguide.com/a/img/catalog/provider/1/1/1-6535600661.jpg" },
  { "id": 14, "name": "Castlevania", "img": "https://es.web.img2.acsta.net/pictures/21/05/10/23/27/0599462.jpg" },
  { "id": 15, "name": "Devilman crybaby", "img": "https://m.media-amazon.com/images/M/MV5BZjYxMGRlZDAtYTU5Ny00NzhmLTgzYzgtNjNjNTZiZDQ5ZjU0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" },
  { "id": 16, "name": "B the beginning ", "img": "https://upload.wikimedia.org/wikipedia/en/4/42/B_the_Beginning_Main_Visual.jpg" },
  { "id": 17, "name": "One punch man", "img": "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/d8eed44e3d48097ab5fd36b6815fc18e.jpe" },
  { "id": 18, "name": "Rick y morty", "img": "https://r1.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic3.abc.es%2Fmedia%2Fseries%2F000%2F003%2F130%2Frick-y-morty-1.jpg&nuevoancho=683&medio=abc" },
  { "id": 19, "name": "Little witch academia", "img": "https://images.cdn1.buscalibre.com/fit-in/360x360/55/56/55563ba0608a3135e5251810146f1ae4.jpg" },
  { "id": 20, "name": "Tokyo Ghoul", "img": "https://es.web.img2.acsta.net/pictures/15/11/04/15/59/314681.jpg" },
  { "id": 21, "name": "7 pecados capitales", "img": "https://flxt.tmsimg.com/assets/p12296875_b_v9_aa.jpg" },
  { "id": 22, "name": "Los Simpsons", "img": "https://depor.com/resizer/2ZrnS5PYqG0W2zEHqVj7ccQHx7A=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BXOCB2SGV5DDLKSKXHCNTDZPDI.jpg" },
  { "id": 23, "name": "Bojackn Horseman", "img": "https://m.media-amazon.com/images/M/MV5BYWQwMDNkM2MtODU4OS00OTY3LTgwOTItNjE2Yzc0MzRkMDllXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" },
  { "id": 24, "name": "Final space", "img": "https://m.media-amazon.com/images/M/MV5BODRjZGY3ZDktZGIxOC00MWUzLTg1N2EtNDM1NTQ2ZTkxYjc1XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg" },
  { "id": 25, "name": "Love death & robots", "img": "https://m.media-amazon.com/images/M/MV5BYTNiYTNkNTAtYzE3ZS00ZDQ1LWEwZTYtZjI1NzYzMWJjY2U4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg" },
  { "id": 26, "name": "Hellsing", "img": "https://m.media-amazon.com/images/M/MV5BZTkyNjA0YTItNTBmNC00ZjFiLTg0YWItOGQ4NGZkMmQ4NDI0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg" },
  { "id": 27, "name": "Mirai Nikk", "img": "https://http2.mlstatic.com/D_NQ_NP_690878-MCO49516513841_032022-O.jpg" },
  { "id": 28, "name": "Los juegos del calamar", "img": "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg" }
];

function App() {
  return (
    <div className="App">
      <MyMovies list={mySeries} />

      <div className="lines" />

      <AddSerieForm />
    </div>
  );
}

export default App;
