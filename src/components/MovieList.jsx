import React from 'react'

function MovieList (props) {
  return (
    <>
        {props.films.map((film, index) => (
            <div key={film.imdbID}>
                <img src={film.Poster} alt="movie poster"/>
                <p>{film.Title}</p>
            </div>
        ))}
    </>
  )
}

export default MovieList