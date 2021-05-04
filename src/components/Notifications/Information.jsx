import React from 'react'
import PropTypes from 'prop-types'
import styles from './Information.css'

const Information = ({ nominationCounter }) => (

    <p className={styles.Information}>
      Welcome to the movies nomination page! <br/>
      Search for you favorite movies and nominate five of them to submit!  <br/>
    
      You currently have {nominationCounter} of 5 selected.
    </p>

)

Information.propTypes = {
  nominationCounter: PropTypes.number.isRequired
}

export default Information
