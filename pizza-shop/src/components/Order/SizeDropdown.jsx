import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormControl } from 'react-bootstrap'

export default class SizeDropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    const target = e.target
    this.setState({
      pizzaOrderSize: target.value
    })
  }

  static propTypes = {
    pizzaSizes: PropTypes.array,
    size: PropTypes.string,
    cost: PropTypes.number
  }


  render() {
    return(
        <FormControl
          componentClass="select"
          placeholder="select"
          id="select-pizza-size"
          value={this.state.value}
          onChange={this.handleInputChange}
        >
            {this.props.pizzaSizes.map((pizza) =>
              <option key={pizza.cost} value={pizza.size}>{pizza.size}</option>
            )}
        </FormControl>
    )
  }
}
