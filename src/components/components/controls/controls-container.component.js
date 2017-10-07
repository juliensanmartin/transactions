import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Controls from './components/controls.component'
import { getAccounts, getCategories } from '../../../actions/selectors'
import { connect } from 'react-redux'

class ControlsContainer extends Component {
  render() {
    const {
      categories,
      accounts
     } = this.props

    return (
      <Controls
        accounts={accounts}
        categories={categories}
      />
    )
  }
}

ControlsContainer.propTypes = {
  accounts: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    accounts: getAccounts(state),
    categories: getCategories(state),
  }
}

function mapDispatchToProps (dispatch) {
  return {
    // onRegionChangeComplete: (region) => {
    //   dispatch(updateRegion(region))
    // },

    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlsContainer)
