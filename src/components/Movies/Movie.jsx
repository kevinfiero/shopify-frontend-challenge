import React from 'react'
import PropTypes from 'prop-types'
import styles from './Movie.css'

const Movie = ({ movie, nominations, onClick}) => {

  let nominated = false;
  
  if(nominations !== undefined){
    nominated = nominations.map(element => element.id).includes(movie.id);
  }

  
  return(
    <div className={styles.Movie}>
      <img src={movie.poster}/>
      <div className={styles.Contents}>
        <h3>{movie.title}</h3>
        <h3>{movie.year}</h3>
        <button 
          value = {JSON.stringify(movie)}
          onClick={onClick}
          className={nominated ? styles.ButtonUnavailable : styles.ButtonAvailable}
        > Nominate 
        </button>
      </div>
    </div>
  )
}

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }),
  onClick: PropTypes.func.isRequired,
  nominations: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }))
}

export default Movie
