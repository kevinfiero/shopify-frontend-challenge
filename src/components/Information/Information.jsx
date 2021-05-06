import React from 'react'
import PropTypes from 'prop-types'
import styles from './Information.css'

const Information = ({ nominationCounter, onClick }) => {

  let message = 
    <h2 className={styles.Information}>
      Please Nominate {5 - nominationCounter} More Movies!
    </h2>

  if(nominationCounter === 5){
    message =
    <div className={styles.Information}>
      <h2>
        Congrats! <br/><br/>You Nominated 5 Movies!
      </h2>
      <button onClick={onClick}>Submit Nominees</button>
    </div>

  }

  return(
    <>
      {message}
    </>

  )
}
Information.propTypes = {
  nominationCounter: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Information
