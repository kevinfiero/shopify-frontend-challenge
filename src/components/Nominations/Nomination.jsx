import React from 'react'
import PropTypes from 'prop-types'
import styles from './Nomination.css'

const Nomination = ({ nomination }) => (

  <div className={styles.Nomination}>
  <img src={nomination.poster}/>
  <div className={styles.Contents}>
    <h3>{nomination.title}</h3>
    <h3>{nomination.year}</h3>
    <button 
    value = {JSON.stringify(nomination)}
    > Remove </button>
  </div>
</div>



)

Nomination.propTypes = {
  nomination: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  })
}

export default Nomination
