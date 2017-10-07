import { createSelector } from 'reselect'
import { filter, orderBy, indexOf, flow } from 'lodash'
import moment from 'moment'

const getTransactions = state => state.entities.transactions
const getCategories = state => state.entities.categories
const getAccounts = state => state.entities.accounts

const getAccountFilter = state => state.ui.accountFilter
const getCategoriesFilter = state => state.ui.categoriesFilter
const getDateFilter = state => state.ui.dateFilter

const filterByAccount = (accountFilter, transactions) => {
  if (accountFilter) {
    return filter(transactions, {accountId:accountFilter})
  }
  return transactions
}

const filterByCategories = (categoriesFilter, transactions) => {
  if (categoriesFilter.length !== 0) {
    return filter(transactions, transaction => indexOf(categoriesFilter, transaction.category) !== -1)
  }
  return transactions
}

const filterByDate = (ascending, transactions) => {
  return orderBy(transactions, transaction => new moment(transaction.transactionDate).format('YYYY-MM-DD'), ascending ? 'asc' : 'desc')
}

const getVisibleTransactions = createSelector(
  [ getAccountFilter, getCategoriesFilter, getDateFilter, getTransactions ],
  (accountFilter, categoriesFilter, dateFilter, transactions) => {
    let result = transactions

    return flow(
      filterByAccount.bind(this, accountFilter),
      filterByCategories.bind(this, categoriesFilter),
      filterByDate.bind(this, dateFilter)
    )(transactions)
  }
)

export {
  getTransactions,
  getCategories,
  getAccounts,
  getVisibleTransactions,
  getAccountFilter,
  getCategoriesFilter,
  getDateFilter
}
