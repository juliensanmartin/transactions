import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TotalTransactions from './components/total-transactions.component'
import { getTotalTransactions } from '../../../actions/selectors'
import { connect } from 'react-redux'

class TotalTransactionsContainer extends Component {
  render() {
    const { totalTransactions } = this.props

    return (
      <TotalTransactions
        totalTransactions={totalTransactions}
      />
    )
  }
}

TotalTransactionsContainer.propTypes = {
  totalTransactions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    totalTransactions: getTotalTransactions(state)
  }
}

export default connect(mapStateToProps, null)(TotalTransactionsContainer)
