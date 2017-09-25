'use strict'

import React, { Component } from 'react'
import render from 'react-dom'
import { DropdownButton, MenuItem } from 'react-bootstrap'

const Pizzas = [
  {size: 'Small', cost: 6},
  {size: 'Medium', cost: 7},
  {size: 'Large', cost: 8}
];

const Toppings = ['Pepperoni', 'Canadian Bacon', 'Sausage', 'Pineapple', 'Peppers', 'Olives'];

export default class PizzaDropdown extends Component {
  render() {
    return (
      <DropdownButton title="Size" id="bg-nested-dropdown">
        <MenuItem eventKey="1">Small</MenuItem>
        <MenuItem eventKey="2">Medium</MenuItem>
        <MenuItem eventKey="3">Large</MenuItem>
      </DropdownButton>
    )
  }
}
