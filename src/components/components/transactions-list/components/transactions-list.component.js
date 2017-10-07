import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
//import css from './transactions.css'

class TransactionsList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isExpanded: false
    }

    this.toggleButton = this.toggleButton.bind(this)
  }

  toggleButton () {
    this.setState({ isExpanded: !this.state.isExpanded })
  }

  render () {
    const {
      transactions
    } = this.props

    const { isExpanded } = this.state

    const transactionsList = transactions.map((transaction) =>
      <li key={transaction.transactionId}>
        {transaction.transactionDate} - {transaction.description}
      </li>
    );
    // <div className={css.transactions_list}>
    return (
      <ul>
        {transactionsList}
      </ul>
  )}
}

TransactionsList.propTypes = {
  transactions: PropTypes.array.isRequired
}

export default TransactionsList
