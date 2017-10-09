import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Controls from './components/controls.component'
import {
  getAccounts,
  getCategories,
  getTransactionsDateRange,
  getAccountFilter,
  getCategoriesFilter,
  getDateFilter,
  getDateRangeFilter
} from '../../../actions/selectors'
import {
  updateAccountFilter,
  updateCategoriesFilter,
  updateDateFilter,
  resetFilter,
  updateDateRangeFilter
} from '../../../actions/ui.actions'
import { connect } from 'react-redux'

class ControlsContainer extends Component {
  render() {
    const {
      categories,
      accounts,
      transactionsDateRange,
      dateFilter,
      accountFilter,
      categoriesFilter,
      dateRangeFilter,
      onDateSortChange,
      onSelectCategory,
      onSelectAccount,
      onDateRangeChange,
      onReset
     } = this.props

    return (
      <Controls
        accounts={accounts}
        categories={categories}
        transactionsDateRange={transactionsDateRange}
        dateRangeFilter={dateRangeFilter}
        dateFilter={dateFilter}
        accountFilter={accountFilter}
        categoriesFilter={categoriesFilter}
        onDateSortChange={onDateSortChange}
        onSelectCategory={onSelectCategory}
        onDateRangeChange={onDateRangeChange}
        onSelectAccount={onSelectAccount}
        onReset={onReset}
      />
    )
  }
}

ControlsContainer.propTypes = {
  accounts: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  transactionsDateRange: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  dateFilter: PropTypes.bool.isRequired,
  accountFilter: PropTypes.string.isRequired,
  categoriesFilter: PropTypes.array.isRequired,
  dateRangeFilter: PropTypes.object.isRequired,
  onDateSortChange: PropTypes.func.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
  onSelectAccount: PropTypes.func.isRequired,
  onDateRangeChange: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    accounts: getAccounts(state),
    categories: getCategories(state),
    transactionsDateRange: getTransactionsDateRange(state),
    dateFilter: getDateFilter(state),
    accountFilter: getAccountFilter(state),
    categoriesFilter: getCategoriesFilter(state),
    dateRangeFilter: getDateRangeFilter(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onDateSortChange: () => dispatch(updateDateFilter()),
    onSelectCategory: categoryId => dispatch(updateCategoriesFilter(categoryId)),
    onSelectAccount: accountId => dispatch(updateAccountFilter(accountId)),
    onReset: () => dispatch(resetFilter()),
    onDateRangeChange: dateRange => dispatch(updateDateRangeFilter(dateRange)),
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlsContainer)
