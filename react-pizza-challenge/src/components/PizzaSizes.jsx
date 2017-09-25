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
  <MenuItem key={index}>{p.size}</MenuItem>
);

export default class PizzaDropdown extends Component {

  render() {
    return (
      <DropdownButton title="Size" id="bg-nested-dropdown">
        {menuItems}
      </DropdownButton>
    )
  }

}
