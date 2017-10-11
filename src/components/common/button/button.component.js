import React from 'react'
import PropTypes from 'prop-types'
import css from './button.css'

class Button extends React.Component {
  render () {
    const {
      label,
      onButtonClick
    } = this.props

    return (
      <div className='button-container'>
        <button className='button' onClick={onButtonClick}>
          {label}
        </button>
      </div>
  )}
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired
}

export default Button
