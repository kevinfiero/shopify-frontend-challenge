import React from 'react'
import PropTypes from 'prop-types'
import Movie from './Movie'
import styles from './MovieList.css'

const MoviesList = ({ movies, nominations, onClick }) => {

  const movieElements = movies.map((movie) => (

      <li key={movie.id} className={styles.MovieList}>
        <Movie movie = {movie} nominations = {nominations} onClick = {onClick} />
      </li>

  ))

  return <ul className={styles.MovieList}>{movieElements}</ul>
  
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
