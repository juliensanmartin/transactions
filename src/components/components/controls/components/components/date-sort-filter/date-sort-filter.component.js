import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
//import css from './transactions.css'

class DateSortFilter extends React.Component {
  render () {
    const {
      dateFilter,
      onDateSortChange
    } = this.props

    return (
      <button onClick={onDateSortChange}>
        Sort by date {dateFilter? 'asc' : 'desc'}
      </button>
  )}
}

DateSortFilter.propTypes = {
  dateFilter: PropTypes.bool.isRequired,
  onDateSortChange: PropTypes.func.isRequired
}

export default DateSortFilter
