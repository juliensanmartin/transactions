import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class TotalTransactions extends React.Component {
  render () {
    const {
      totalTransactions
    } = this.props

    return (
      <div>
        <span>Total withdrawal: ${totalTransactions.withdrawal}</span>
        <span>Total deposit: ${totalTransactions.deposit}</span>
      </div>
  )}
}

TotalTransactions.propTypes = {
  totalTransactions: PropTypes.object.isRequired
}

export default TotalTransactions
