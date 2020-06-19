import React from 'react'
import { Link } from 'react-router-dom'
import MovieShow from '../components/MovieShow'

const MoviesList = ({ movies }) => {

    const renderMovies = Object.keys(movies).map(movieId => 
        <Link key={movieId} to={`/movies/${movieId}`}> {movies[movieId].title} </Link>)

    return (
        <div>
            {renderMovies}
        </div>
    )
}

export default MoviesList