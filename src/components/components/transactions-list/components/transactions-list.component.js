import React from 'react'
import PropTypes from 'prop-types'
import css from './transactions-list.css'

class TransactionsList extends React.Component {
  render () {
    const {
      transactions
    } = this.props

    const transactionsList = transactions.map((transaction) =>
      <div className='transactions__item' key={transaction.transactionId}>
        <div className='transactions__date'>{transaction.transactionDate}</div>
        <div className='transactions__description'>{transaction.description}</div>
        <div className='transactions__amount'>${transaction.amount}</div>
        <div className='transactions__category'>{transaction.category}</div>
      </div>
    )

    return (
      <div className='transactions-list-container'>
        <div className='transactions__title'>List of transactions</div>
        {transactionsList}
      </div>
  )}
}

TransactionsList.propTypes = {
  transactions: PropTypes.array.isRequired
}

export default TransactionsList
