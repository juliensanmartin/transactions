import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { DateRange } from 'react-date-range'
//import css from './transactions.css'

class DateRangeFilter extends React.Component {
  handleDateChange (range) {
    this.props.onDateRangeChange({
      start: range.startDate.format('YYYY-MM-DD'),
      end: range.endDate.format('YYYY-MM-DD')
    })
  }

  render () {
    const {
      transactionsDateRange,
      dateRangeFilter
    } = this.props

    const startDate = dateRangeFilter.start || transactionsDateRange.start
    const endDate = dateRangeFilter.end || transactionsDateRange.end

    return (
      <div>
        {dateRangeFilter &&
          <DateRange
    				onChange={this.handleDateChange.bind(this)}
            startDate={startDate}
            endDate={endDate}
            minDate={transactionsDateRange.start}
            maxDate={transactionsDateRange.end}
            format='YYYY-MM-DD'
            rangedCalendars={true}
            calendars={1}
    			/>
        }
      </div>
  )}
}

DateRangeFilter.propTypes = {
  transactionsDateRange: PropTypes.object.isRequired,
  dateRangeFilter: PropTypes.object.isRequired,
  onDateRangeChange: PropTypes.func.isRequired
}

export default DateRangeFilter
