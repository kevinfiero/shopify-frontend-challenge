import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ search, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search For A Movie!"
      value={search}
      onChange={onChange}
    />
  )
}

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Search
