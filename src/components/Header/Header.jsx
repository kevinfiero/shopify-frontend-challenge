import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.css'

const Header = () => {

  return (
    <div className = {styles.Header}>
      <h1>The Shoppies Movie Nominations!</h1>
      <h3>We need your help nominating movies! <br/><br/> Please search for your favorites to nominate!</h3>
    </div>
  )
}

export default Header
