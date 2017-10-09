import React from 'react'
import PropTypes from 'prop-types'
import css from './total.css'

class TotalTransactions extends React.Component {
  render () {
    const {
      totalTransactions
    } = this.props

    return (
      <div className='total-container'>
        <div className='total__title'>Total</div>
        <div className='total__item'>
          <div>Withdrawal  <span className='total__amount'>${totalTransactions.withdrawal}</span></div>
          <div>Deposit  <span className='total__amount'>${totalTransactions.deposit}</span></div>
        </div>
      </div>
  )}
}

TotalTransactions.propTypes = {
  totalTransactions: PropTypes.object.isRequired
}

export default TotalTransactions
