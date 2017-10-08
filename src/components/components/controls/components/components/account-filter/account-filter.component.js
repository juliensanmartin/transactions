import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
//import css from './transactions.css'

class AccountFilter extends React.Component {
  render () {
    const {
      accounts,
      accountFilter,
      onSelectAccount
    } = this.props

    let accountsSelectComponent = accounts.map(account =>
      <option
        key={account.accountId}
        value={account.accountId}
      >
        {account.accountName}
      </option>
    )

    accountsSelectComponent.unshift(
      <option
        key='none'
        value=''
      >
        none
      </option>
    )

    return (
      <select onChange={evt=>onSelectAccount(evt.target.value)} value={accountFilter}>
        {accountsSelectComponent}
      </select>
  )}
}

AccountFilter.propTypes = {
  accounts: PropTypes.array.isRequired,
  accountFilter: PropTypes.string.isRequired,
  onSelectAccount: PropTypes.func.isRequired
}

export default AccountFilter
