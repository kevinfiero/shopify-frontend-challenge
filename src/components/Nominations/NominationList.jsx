import React from 'react'
import PropTypes from 'prop-types'
import styles from './NominationList.css'
import Nomination from './Nomination'

const NominationList = ({ nominations, onClick }) => {

  const nominationElements = nominations.map((nomination) => (

    <li key={nomination.id} className={styles.NominationList}>
      <Nomination nomination = {nomination} onClick={onClick} />
    </li>

))

return <ul className={styles.NominationList}>{nominationElements}</ul>
}

NominationList.propTypes = {
  nominations: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }))

}

export default NominationList
