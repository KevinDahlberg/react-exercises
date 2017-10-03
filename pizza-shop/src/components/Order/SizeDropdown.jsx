import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormControl } from 'react-bootstrap'

export default class SizeDropdown extends Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    this.props.onSizeChange(e.target.value)
  }

  static propTypes = {
    pizzaSizes: PropTypes.array,
    size: PropTypes.string,
    cost: PropTypes.number
  }


  render() {
    const pizzaSizes = [
          {size: 'Size', cost: 0},
          {size: 'Large', cost: 8},
          {size: 'Medium', cost: 7},
          {size: 'Small', cost: 6}
        ]

    return(
        <FormControl
          componentClass="select"
          placeholder="select"
          id="select-pizza-size"
          value={this.props.pizzaOrderSize}
          onChange={this.handleInputChange}
        >
            {pizzaSizes.map((pizza) =>
              <option key={pizza.cost} value={pizza.size}>{pizza.size}</option>
            )}
        </FormControl>
    )
  }
}
