import React, { Component } from 'react'
import TransactionsContainer from './components/transactions-list/transactions-container.component'
import ControlsContainer from './components/controls/controls-container.component'
import TotalTransactionsContainer from './components/total-transactions/total-transactions-container.component'

class TransactionsTool extends Component {
  render() {
    return (
      <div>
        <ControlsContainer />
        <TotalTransactionsContainer />
        <TransactionsContainer />
      </div>
    )
  }
}

export default TransactionsTool
