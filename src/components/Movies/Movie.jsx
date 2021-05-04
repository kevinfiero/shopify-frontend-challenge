import React from 'react'
import PropTypes from 'prop-types'
import styles from './Movie.css'

const Movie = ({ movie, nominations, onClick}) => (
    <div className={styles.Movie}>
      <img src={movie.poster}/>
      <div className={styles.Contents}>
        <h3>{movie.title}</h3>
        <h3>{movie.year}</h3>
        <button 
        value = {JSON.stringify(movie)}
        onClick={onClick}> Nominate </button>
      </div>
    </div>
)

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  })
}

export default Movie
