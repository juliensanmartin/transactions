import {
  ACCOUNT_FILTER_UPDATED,
  CATEGORIES_FILTER_UPDATED,
  DATE_FILTER_UPDATED,
  RESET_FILTER
} from '../actions/types'
import { combineReducers } from 'redux'
import { union } from 'lodash'

const categoriesFilter = (state = [], action) => {
  switch (action.type) {
    case CATEGORIES_FILTER_UPDATED:
      return union(state, [action.categoryId])
    case RESET_FILTER:
      return []
    default:
      return state
  }
}

const accountFilter = (state = null, action) => {
  switch (action.type) {
    case ACCOUNT_FILTER_UPDATED:
      return action.accountId
    case RESET_FILTER:
      return {}
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

export default combineReducers({
	categoriesFilter, accountFilter, dateFilter
})
