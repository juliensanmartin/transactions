import {
  ACCOUNT_FILTER_UPDATED,
  CATEGORIES_FILTER_UPDATED,
  DATE_FILTER_UPDATED,
  RESET_FILTER,
  DATE_RANGE_FILTER_UPDATED
} from '../actions/types'
import { combineReducers } from 'redux'
import { without, findIndex } from 'lodash'

const categoriesFilter = (state = [], action) => {
  switch (action.type) {
    case CATEGORIES_FILTER_UPDATED:
      if (findIndex(state, categoryId => categoryId === action.categoryId) === -1){
        return [...state, action.categoryId]
      } else {
        return without(state, action.categoryId)
      }
    case RESET_FILTER:
      return []
    default:
      return state
  }
}

const accountFilter = (state = '', action) => {
  switch (action.type) {
    case ACCOUNT_FILTER_UPDATED:
      return action.accountId
    case RESET_FILTER:
      return ''
    default:
      return state
  }
}

const dateFilter = (state = true, action) => {
  switch (action.type) {
    case DATE_FILTER_UPDATED:
      return !state
    case RESET_FILTER:
      return true
    default:
      return state
  }
}

const dateRangeFilter = (state = {}, action) => {
  switch (action.type) {
    case DATE_RANGE_FILTER_UPDATED:
      return { ...action.transactionsDateRange }
    case RESET_FILTER:
      return {}
    default:
      return state
  }
}

export default combineReducers({
	categoriesFilter, accountFilter, dateFilter, dateRangeFilter
})
