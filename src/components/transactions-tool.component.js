import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TransactionsContainer from './components/transactions-list/transactions-container.component'
import ControlsContainer from './components/controls/controls-container.component'

class TransactionsTool extends Component {
  render() {
    return (
      <div>
        <ControlsContainer />
        <TransactionsContainer />
      </div>
    )
  }
}

export default TransactionsTool
