import { useState } from 'react'
import './App.css'
import MovieList from './components/MovieList';


function App() {

  const [films, setFilms] = useState([
    {
        "Title": "Indiana Jones and the Raiders of the Lost Ark",
        "Year": "1981",
        "imdbID": "tt0082971",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_SX300.jpg"
    },
    {
        "Title": "Indiana Jones and the Last Crusade",
        "Year": "1989",
        "imdbID": "tt0097576",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjNkMzc2N2QtNjVlNS00ZTk5LTg0MTgtODY2MDAwNTMwZjBjXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    },
    {
        "Title": "Indiana Jones and the Temple of Doom",
        "Year": "1984",
        "imdbID": "tt0087469",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMGI1NTk2ZWMtMmI0YS00Yzg0LTljMzgtZTg4YjkyY2E5Zjc0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
        "Title": "Indiana Jones and the Kingdom of the Crystal Skull",
        "Year": "2008",
        "imdbID": "tt0367882",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDIzNzM5MDUtZmI5MC00NGQ5LWFlNzEtYzE3ODIxNDI3ZmNhXkEyXkFqcGdeQXVyNjQ4ODE4MzQ@._V1_SX300.jpg"
    },
    {
        "Title": "The Young Indiana Jones Chronicles",
        "Year": "1992–1993",
        "imdbID": "tt0103586",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BY2Q2NTMwMzItNTM2My00ZTgzLTljYmQtOWEwNzVlZjZlYjc1XkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_SX300.jpg"
    },
    {
        "Title": "Lego Indiana Jones: The Original Adventures",
        "Year": "2008",
        "imdbID": "tt1149318",
        "Type": "game",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMThkYjA2NDUtYjAyNS00ZDNkLThhYTgtMmFhNzIxZWFiYjYyXkEyXkFqcGdeQXVyOTA1ODU0Mzc@._V1_SX300.jpg"
    },
    {
        "Title": "Indiana Jones and the Fate of Atlantis",
        "Year": "1992",
        "imdbID": "tt0245165",
        "Type": "game",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDhmNTZjZDQtM2Y4OS00NWI3LWIzMGEtMTYxNGEzY2UwOWUzXkEyXkFqcGdeQXVyMzMxNDQ0NQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Indiana Jones and the Temple of the Forbidden Eye Ride",
        "Year": "1995",
        "imdbID": "tt0764648",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzk5ZmEyMTgtYzQ0ZC00YTEwLWExOTUtMDZhZmY5NDQ0OGJlXkEyXkFqcGdeQXVyNzAyNzI4Njc@._V1_SX300.jpg"
    },
    {
        "Title": "The Adventures of Young Indiana Jones: Treasure of the Peacock's Eye",
        "Year": "1995",
        "imdbID": "tt0115031",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTg2MTc2NDAzOF5BMl5BanBnXkFtZTcwODExNDIyMQ@@._V1_SX300.jpg"
    },
    {
        "Title": "The Adventures of Young Indiana Jones: Travels with Father",
        "Year": "1996",
        "imdbID": "tt0154003",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjU0NTY3M2UtZGJlYi00MDk4LWE0ZTAtZWI1MzcyZDg3Y2U5XkEyXkFqcGdeQXVyMzU0NzkwMDg@._V1_SX300.jpg"
    }
  ])

  
    


  
  

  return (
    <div>
      <MovieList films={films} />

    </div>
  );
}

export default App;
