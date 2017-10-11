import React from 'react'
import PropTypes from 'prop-types'
import AccountFilter from './components/account-filter/account-filter.component'
import CategoriesFilter from './components/categories-filter/categories-filter.component'
import DateRangeFilter from './components/date-range-filter/date-range-filter.component'
import Button from '../../../common/button/button.component'
import css from './controls.css'

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

     let dateSortFilterLabel = 'Sort by date asc'
     if (dateFilter) dateSortFilterLabel = 'Sort by date desc'

    return (
      <div className='controls'>
        <div className='controls__title'>Filters</div>
        <div className='controls--simple'>
          <AccountFilter
            accounts={accounts}
            onSelectAccount={onSelectAccount}
            accountFilter={accountFilter}
          />
          <Button
            label={dateSortFilterLabel}
            onButtonClick={onDateSortChange}
          />
          <Button
            label='Reset Filter'
            onButtonClick={onReset}
          />
        </div>
        <div className='controls--larger'>
          <CategoriesFilter
            categories={categories}
            onSelectCategory={onSelectCategory}
            categoriesFilter={categoriesFilter}
          />
          <DateRangeFilter
            transactionsDateRange={transactionsDateRange}
            onDateRangeChange={onDateRangeChange}
            dateRangeFilter={dateRangeFilter}
          />
        </div>
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
