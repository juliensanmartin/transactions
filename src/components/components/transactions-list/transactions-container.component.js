import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TransactionsList from './components/transactions-list.component'
import { fetchTransactions } from '../../../actions/actions'
import { getTransactions } from '../../../actions/selectors'
import { connect } from 'react-redux'

class TransactionsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTransactions())
  }

  render() {
    const { transactions } = this.props

    return (
      <TransactionsList
        transactions={transactions}
      />
    )
  }
}

TransactionsContainer.propTypes = {
  transactions: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    transactions: getTransactions(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    // onRegionChangeComplete: (region) => {
    //   dispatch(updateRegion(region))
    // },

    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsContainer)
