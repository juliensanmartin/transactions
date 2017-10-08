import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Controls from './components/controls.component'
import {
  getAccounts,
  getCategories,
  getAccountFilter,
  getCategoriesFilter,
  getDateFilter
} from '../../../actions/selectors'
import {
  updateAccountFilter,
  updateCategoriesFilter,
  updateDateFilter,
  resetFilter
} from '../../../actions/ui.actions'
import { connect } from 'react-redux'

class ControlsContainer extends Component {
  render() {
    const {
      categories,
      accounts,
      dateFilter,
      accountFilter,
      categoriesFilter,
      onDateSortChange,
      onSelectCategory,
      onSelectAccount,
      onReset
     } = this.props

    return (
      <Controls
        accounts={accounts}
        categories={categories}
        dateFilter={dateFilter}
        accountFilter={accountFilter}
        categoriesFilter={categoriesFilter}
        onDateSortChange={onDateSortChange}
        onSelectCategory={onSelectCategory}
        onSelectAccount={onSelectAccount}
        onReset={onReset}
      />
    )
  }
}

ControlsContainer.propTypes = {
  accounts: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  dateFilter: PropTypes.bool.isRequired,
  accountFilter: PropTypes.string.isRequired,
  categoriesFilter: PropTypes.array.isRequired,
  onDateSortChange: PropTypes.func.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
  onSelectAccount: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    accounts: getAccounts(state),
    categories: getCategories(state),
    dateFilter: getDateFilter(state),
    accountFilter: getAccountFilter(state),
    categoriesFilter: getCategoriesFilter(state)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onDateSortChange: () => dispatch(updateDateFilter()),
    onSelectCategory: categoryId => dispatch(updateCategoriesFilter(categoryId)),
    onSelectAccount: accountId => dispatch(updateAccountFilter(accountId)),
    onReset: () => dispatch(resetFilter()),
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlsContainer)
