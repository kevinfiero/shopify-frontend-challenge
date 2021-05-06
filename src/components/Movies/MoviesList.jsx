import React from 'react'
import PropTypes from 'prop-types'
import Movie from './Movie'
import styles from './MovieList.css'

const MoviesList = ({ movies, nominations, onClick }) => {

  const movieElements = movies.map((movie) => (

      <li key={movie.id} className={styles.MovieList}>
        <Movie movie = {movie} nominations ={nominations} onClick = {onClick} />
      </li>

  ))

  if(movieElements.length !== 0){
    return (
      <div className={styles.Columns}>
        <h2>Search Results</h2>
        <ul data-testid="movies" className={styles.MovieList}>{movieElements}</ul>
      </div>)
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
  onClick: PropTypes.func.isRequired,
  nominations: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }))
}

export default MoviesList
