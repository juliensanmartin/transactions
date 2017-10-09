import {
  ACCOUNT_FILTER_UPDATED,
  CATEGORIES_FILTER_UPDATED,
  DATE_FILTER_UPDATED,
  RESET_FILTER,
  DATE_RANGE_FILTER_UPDATED
} from './types'

export const updateAccountFilter = accountId => dispatch => {
  dispatch({
    type: ACCOUNT_FILTER_UPDATED,
    accountId
  })
}

export const updateCategoriesFilter = categoryId => dispatch => {
  dispatch({
    type: CATEGORIES_FILTER_UPDATED,
    categoryId
  })
}

export const updateDateFilter = () => dispatch => {
  dispatch({
    type: DATE_FILTER_UPDATED
  })
}

export const updateDateRangeFilter = transactionsDateRange => dispatch => {
  dispatch({
    type: DATE_RANGE_FILTER_UPDATED,
    transactionsDateRange
  })
}

export const resetFilter = () => dispatch => {
  dispatch({
    type: RESET_FILTER
  })
}
