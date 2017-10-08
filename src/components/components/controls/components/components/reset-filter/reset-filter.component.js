import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
//import css from './transactions.css'

class ResetFilter extends React.Component {
  render () {
    const {
      onReset
    } = this.props

    return (
      <button onClick={onReset}>
        Reset filters
      </button>
  )}
}

ResetFilter.propTypes = {
  onReset: PropTypes.func.isRequired
}

export default ResetFilter
