'use strict'

import React, { Component } from 'react'
import render from 'react-dom'
import { DropdownButton, MenuItem } from 'react-bootstrap'

//Pizza info
const Pizzas = [
  {size: 'Small', cost: 6},
  {size: 'Medium', cost: 7},
  {size: 'Large', cost: 8}
];

const menuItems = Pizzas.map((p, index) =>
  <option key={index} value={p.size}>{p.size}</option>
);

export default class PizzaDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({size: event.target.value});
  }

  render() {
    return (
      <select value={this.props.value}
      onChange={this.handleChange}>
        {menuItems}
      </select>
    )
  }

}
