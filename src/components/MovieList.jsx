import React from 'react'
import {Card} from 'react-bootstrap'

function MovieList (props) {
  return (
    <>
        {props.films.map((film, index) => (
            <Card style={{ width: '20rem' }} key={film.imdbID}>
                <img src={film.Poster} alt="movie poster"/>
                <p>{film.Title}</p>
            </Card>
        ))}
    </>
  )
}

export default MovieList