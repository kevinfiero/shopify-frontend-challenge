import React from 'react'
import PropTypes from 'prop-types'
import styles from './Search.css'

const Search = ({ search, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search For A Movie!"
      value={search}
      onChange={onChange}
      className={styles.Search}
    />
  )
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Search
