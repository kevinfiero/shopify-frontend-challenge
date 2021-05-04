import React from 'react'
import PropTypes from 'prop-types'
import Movie from './Movie'
import styles from './MovieList.css'

const MoviesList = ({ movies, onClick }) => {

  const movieElements = movies.map((movie) => (

      <li key={movie.id} className={styles.MovieList}>
        <Movie movie = {movie} onClick = {onClick} />
      </li>

  ))

  if(movieElements.length !== 0){
    return <ul className={styles.MovieList}>{movieElements}</ul>
  } else {
    return <div className={styles.NoSearch}>Please Enter A Valid Search Term</div>
  }
  
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  })),
  onClick: PropTypes.func.isRequired
}

export default MoviesList
