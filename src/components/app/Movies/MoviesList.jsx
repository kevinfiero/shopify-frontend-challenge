import React from 'react'
import PropTypes from 'prop-types'
import Movie from './Movie'

const MoviesList = ({ movies }) => {

  const movieElements = movies.map((movie) => (

      <li key={movie.id}>
        <Movie {...movie} />
      </li>

  ))

  return <ul>{movieElements}</ul>
  
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }))
}

export default MoviesList
