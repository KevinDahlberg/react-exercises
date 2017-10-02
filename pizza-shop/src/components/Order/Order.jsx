import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'

import SizeDropdown from './SizeDropdown'
import ToppingCheckboxes from './ToppingCheckboxes'

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzaSizes: [
        {size: 'Large', cost: 8},
        {size: 'Medium', cost: 7},
        {size: 'Small', cost: 6}
      ],
      pizzaToppings: [
        {topping: 'Pepperoni', cost: 1},
        {topping: 'Sausage', cost: 1},
        {topping: 'Canadian Bacon', cost: 1},
        {topping: 'Pineapple', cost: 1},
        {topping: 'Jalapeno Peppers', cost: 1},
        {topping: 'Mushrooms', cost: 1}
      ]
    }
  }

  render() {

    return (
      <Grid>
      <h1>Order Your Pizza</h1>
      <h2>Choose Your Size</h2>
      <SizeDropdown pizzaSizes = {this.state.pizzaSizes} />
      <h2>Choose Your Toppings</h2>
      <ToppingCheckboxes pizzaToppings= {this.state.pizzaToppings} />
      </Grid>
    )
  }
}
