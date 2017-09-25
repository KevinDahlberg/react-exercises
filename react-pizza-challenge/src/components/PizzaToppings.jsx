'use strict'

import React, { Component } from 'react'
import render from 'react-dom'
import { DropdownButton, MenuItem } from 'react-bootstrap'

//Toppings info
const Toppings = ['Pepperoni', 'Canadian Bacon', 'Sausage', 'Pineapple', 'Peppers', 'Olives'];

const toppingItems = Toppings.map((t, index) =>
  <MenuItem key={index}>{t}</MenuItem>
);

export default class ToppingDropdown extends Component {
  render () {
    return (
      <DropdownButton title="Toppings" id="bg-nested-dropdown">
        {toppingItems}
      </DropdownButton>
    )
  }
}
