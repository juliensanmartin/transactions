import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
//import css from './transactions.css'

class CategoriesFilter extends React.Component {
  render () {
    const {
      categories
    } = this.props

    return (
      <div>
        Categories filter
      </div>
  )}
}

CategoriesFilter.propTypes = {
  categories: PropTypes.array.isRequired
}

export default CategoriesFilter
