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

  if(nominationElements.length !== 0){
    return (
    <div className={styles.Columns}>
      <h2>Current Nominees</h2>
      <ul data-testid="nominations" className={styles.NominationList}>{nominationElements}</ul>
    </div>)
  } else {
    return <div className={styles.NoNominations}>No Current Nominations</div>
  }

}

NominationList.propTypes = {
  nominations: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  })),
  onClick: PropTypes.func.isRequired
}

export default NominationList
