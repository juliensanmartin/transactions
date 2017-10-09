import React from 'react'
import PropTypes from 'prop-types'
import css from './date-sort.css'

class DateSortFilter extends React.Component {
  render () {
    const {
      dateFilter,
      onDateSortChange
    } = this.props

    return (
      <div className='date-sort-container'>
        <button className='date-sort__button' onClick={onDateSortChange}>
          Sort by date {dateFilter? 'desc' : 'asc'}
        </button>
      </div>
  )}
}

DateSortFilter.propTypes = {
  dateFilter: PropTypes.bool.isRequired,
  onDateSortChange: PropTypes.func.isRequired
}

export default DateSortFilter
