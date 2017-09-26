'use strict'

import React, { Component } from 'react'
import render from 'react-dom'
import { DropdownButton, MenuItem } from 'react-bootstrap'

//Toppings info
const Toppings = [
  {topping: 'Pepperoni', cost: 1},
  {topping: 'Canadian Bacon', cost: 1},
  {topping: 'Sausage', cost: 1},
  {topping: 'Pineapple', cost: 1},
  {topping: 'Peppers', cost: 1},
  {topping: 'Olives', cost: 1}
];

const toppingItems = Toppings.map((t, index) =>
  <MenuItem key={index}>{t.topping}</MenuItem>
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
