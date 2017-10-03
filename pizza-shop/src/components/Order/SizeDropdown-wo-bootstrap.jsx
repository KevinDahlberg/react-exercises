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
    return(
        <form>
          <label>Pizza Size</label>
          <select value={this.props.value} onChange={this.handleInputChange}>
            {this.props.pizzaSizes.map((pizza) =>
              <option key={pizza.cost} value={pizza.size}>{pizza.size}</option>
            )}
          </select>
        </form>
    )
  }
}
