import React from 'react'
import PropTypes from 'prop-types'

const Movie = ({ title, year, id, poster}) => (
    <>
      <h3>{title}</h3>
      <h3>{year}</h3>
      <h3>{id}</h3>
      <h3>{poster}</h3>
    </>
  
)

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

export default Movie
