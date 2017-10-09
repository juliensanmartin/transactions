import React from 'react'
import PropTypes from 'prop-types'
import css from './accounts.css'

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
      <div className='accounts-container'>
        <div className='accounts__title'>Accounts</div>
        <select onChange={evt=>onSelectAccount(evt.target.value)} value={accountFilter}>
          {accountsSelectComponent}
        </select>
      </div>
  )}
}

AccountFilter.propTypes = {
  accounts: PropTypes.array.isRequired,
  accountFilter: PropTypes.string.isRequired,
  onSelectAccount: PropTypes.func.isRequired
}

export default AccountFilter
