import React from 'react'
import PropTypes from 'prop-types'
import { indexOf } from 'lodash'
import css from './categories.css'

class CategoriesFilter extends React.Component {
  render () {
    const {
      categories,
      categoriesFilter,
      onSelectCategory
    } = this.props

    const categoriesSelectComponent = categories.map(category =>
      <div key={category} className='categories__category'>
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
      <div className='categories-tool'>
        <div className='categories__title'>Categories</div>
        <div className='categories-container'>
          {categoriesSelectComponent}
        </div>
      </div>
  )}
}

CategoriesFilter.propTypes = {
  categories: PropTypes.array.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
  categoriesFilter: PropTypes.array.isRequired
}

export default CategoriesFilter
