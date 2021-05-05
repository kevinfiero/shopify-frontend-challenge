import React from 'react'
import PropTypes from 'prop-types'
import styles from './Information.css'

const Information = ({ nominationCounter }) => {

  let message = 
    <h2 className={styles.Information}>
      Please Nominate {5 - nominationCounter} More Movies!
    </h2>

  if(nominationCounter === 5){
    console.log(nominationCounter);
    message =     
      <h2 className={styles.Information}>
        Congrats! <br/><br/>You Nominated 5 Movies!
      </h2>
  }

  return(
    <>
      {message}
    </>

  )
}
Information.propTypes = {
  nominationCounter: PropTypes.number.isRequired
}

export default Information
