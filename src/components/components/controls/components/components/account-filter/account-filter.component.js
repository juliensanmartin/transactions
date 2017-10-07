import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
//import css from './transactions.css'

class AccountFilter extends React.Component {
  render () {
    const {
      accounts
    } = this.props

    return (
      <div>
        Account filter
      </div>
  )}
}

AccountFilter.propTypes = {
  accounts: PropTypes.array.isRequired
}

export default AccountFilter
