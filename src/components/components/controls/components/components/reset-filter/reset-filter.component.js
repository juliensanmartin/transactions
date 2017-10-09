import React from 'react'
import PropTypes from 'prop-types'
import css from './reset.css'

class ResetFilter extends React.Component {
  render () {
    const {
      onReset
    } = this.props

    return (
      <div className='reset-container'>
        <button className='reset__button' onClick={onReset}>
          Reset filters
        </button>
      </div>
  )}
}

ResetFilter.propTypes = {
  onReset: PropTypes.func.isRequired
}

export default ResetFilter
