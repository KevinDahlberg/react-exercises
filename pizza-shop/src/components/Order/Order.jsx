import React, { Component } from 'react'
import { Grid, FormGroup, InputGroup, Col } from 'react-bootstrap'

import SizeDropdown from './SizeDropdown'
import ToppingCheckboxes from './ToppingCheckboxes'
import OrderForm from '../../containers/OrderForm'

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
      <Col xs={6}>
        <form>
          <FormGroup>
            <h2>Choose Your Size</h2>
            <SizeDropdown pizzaSizes={this.state.pizzaSizes} />
          </FormGroup>
          <FormGroup>
            <h2>Choose Your Toppings</h2>
            <ToppingCheckboxes pizzaToppings={this.state.pizzaToppings} />
          </FormGroup>
        </form>
      </Col>
      <Col xs={6}>
        <h2>Your Pizza</h2>
        <p>Size: {this.state.pizzaOrderSize}</p>
        <p>Toppings: {this.state.currentToppings}</p>
      </Col>
      </Grid>
    )
  }
}
