import {
  TRANSACTIONS_POPULATED,
  ACCOUNTS_POPULATED,
  CATEGORIES_POPULATED,
  TRANSACTION_INFO_POPULATED
} from './types'
import { getTransactions } from '../infrastructure/transactions.resource'

export const fetchTransactions = () => dispatch => getTransactions()
  .then(({transactionData, categories, accounts}) => {
    dispatch({
      type: TRANSACTIONS_POPULATED,
      transactions: transactionData.transactions
    })
    dispatch({
      type: TRANSACTION_INFO_POPULATED,
      transactionsDateRange: {start: transactionData.earliestTransactionDate, end: transactionData.latestTransactionDate}
    })
    dispatch({
      type: ACCOUNTS_POPULATED,
      accounts
    })
    dispatch({
      type: CATEGORIES_POPULATED,
      categories
    })
  },
  errors => {
    console.error(errors)
  }
)
