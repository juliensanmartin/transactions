import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { indexOf } from 'lodash'

class CategoriesFilter extends React.Component {
  render () {
    const {
      categories,
      categoriesFilter,
      onSelectCategory
    } = this.props

    const categoriesSelectComponent = categories.map(category =>
      <div key={category}>
        <input
          type='checkbox'
          id={category}
          value={category}
          checked={indexOf(categoriesFilter, category) !== -1}
          onChange={evt=>onSelectCategory(evt.target.value)}
        />
        <label>{category}</label>
      </div>
    )

    return (
      <div>
        {categoriesSelectComponent}
      </div>
  )}
}

CategoriesFilter.propTypes = {
  categories: PropTypes.array.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
  categoriesFilter: PropTypes.array.isRequired
}

export default CategoriesFilter
