import React from 'react'
import PropTypes from 'prop-types'
import styles from './Movie.css'

const Movie = ({ title, year, id, poster}) => (
    <div className={styles.Movie}>
      <img src={poster}/>
      <div className={styles.Contents}>
        <h3>{title}</h3>
        <h3>{year}</h3>
        <button> Nominate </button>
      </div>

    </div>
  
)

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

export default Movie
