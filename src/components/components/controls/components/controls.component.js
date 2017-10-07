import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import AccountFilter from './components/account-filter/account-filter.component'
import CategoriesFilter from './components/categories-filter/categories-filter.component'
import DateSortFilter from './components/date-sort-filter/date-sort-filter.component'
import ResetFilter from './components/reset-filter/reset-filter.component'

//import css from './transactions.css'

class Controls extends React.Component {
  render () {
    const {
      categories,
      accounts
    } = this.props

    return (
      <div>
        <AccountFilter
          accounts={accounts}
        />
        <CategoriesFilter
          categories={categories}
        />
        <DateSortFilter

        />
        <ResetFilter/>
      </div>
  )}
}

Controls.propTypes = {
  categories: PropTypes.array.isRequired,
  accounts: PropTypes.array.isRequired
}

export default Controls
