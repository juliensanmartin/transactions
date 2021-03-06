import {
  TRANSACTIONS_POPULATED,
  ACCOUNTS_POPULATED,
  CATEGORIES_POPULATED,
  TRANSACTION_INFO_POPULATED
} from '../actions/types'
import { combineReducers } from 'redux'

export const transactions = (state = [], action) => {
  switch (action.type) {
    case TRANSACTIONS_POPULATED:
      return [ ...action.transactions ]
    default:
      return state
  }
}

export const transactionsDateRange = (state = {}, action) => {
  switch (action.type) {
    case TRANSACTION_INFO_POPULATED:
      return { ...action.transactionsDateRange }
    default:
      return state
  }
}

export const categories = (state = [], action) => {
  switch (action.type) {
    case CATEGORIES_POPULATED:
      return [ ...action.categories ]
    default:
      return state
  }
}

export const accounts = (state = [], action) => {
  switch (action.type) {
    case ACCOUNTS_POPULATED:
      return [ ...action.accounts ]
    default:
      return state
  }
}

export default combineReducers({
	transactions, categories, accounts, transactionsDateRange
})
