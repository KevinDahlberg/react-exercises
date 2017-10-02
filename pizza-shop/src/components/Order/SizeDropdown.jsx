import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SplitButton, MenuItem } from 'react-bootstrap'

export default class SizeDropdown extends Component {

  static propTypes = {
    pizzaSizes: PropTypes.array,
    size: PropTypes.string,
    cost: PropTypes.number
  }

  render() {
    return(
      <SplitButton bsStyle="default" bsSize="large" title="Size" id="select-pizza-size">
        {this.props.pizzaSizes.map((pizza) =>
          <MenuItem key={pizza.cost}>{pizza.size}</MenuItem>
        )}
      </SplitButton>
    )
  }
}
