import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import AccountFilter from './components/account-filter/account-filter.component'
import CategoriesFilter from './components/categories-filter/categories-filter.component'
import DateSortFilter from './components/date-sort-filter/date-sort-filter.component'
import ResetFilter from './components/reset-filter/reset-filter.component'
import DateRangeFilter from './components/date-range-filter/date-range-filter.component'

//import css from './transactions.css'

class Controls extends React.Component {
  render () {
    const {
      categories,
      accounts,
      transactionsDateRange,
      dateFilter,
      dateRangeFilter,
      accountFilter,
      categoriesFilter,
      onDateSortChange,
      onSelectCategory,
      onSelectAccount,
      onDateRangeChange,
      onReset
     } = this.props

    return (
      <div>
        <AccountFilter
          accounts={accounts}
          onSelectAccount={onSelectAccount}
          accountFilter={accountFilter}
        />
        <CategoriesFilter
          categories={categories}
          onSelectCategory={onSelectCategory}
          categoriesFilter={categoriesFilter}
        />
        <DateSortFilter
          dateFilter={dateFilter}
          onDateSortChange={onDateSortChange}
        />
        <DateRangeFilter
          transactionsDateRange={transactionsDateRange}
          onDateRangeChange={onDateRangeChange}
          dateRangeFilter={dateRangeFilter}
        />
        <ResetFilter
          onReset={onReset}
        />
      </div>
  )}
}

Controls.propTypes = {
  accounts: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  transactionsDateRange: PropTypes.object.isRequired,
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

export default Controls
