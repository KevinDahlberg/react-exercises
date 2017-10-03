import React, { Component } from 'react'
import { Grid, FormGroup, InputGroup, Col, Button} from 'react-bootstrap'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import SizeDropdown from './SizeDropdown'
import ToppingCheckboxes from './ToppingCheckboxes'
import OrderForm from '../../containers/OrderForm'
import addToCart from '../../data/cart'

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzaSizes: [
        {size: 'Size', cost: 0},
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
      ],
      pizzaOrderSize: '',
      pizzaOrderToppings: []
    }

    this.setPizzaOrderSize = this.setPizzaOrderSize.bind(this)
    this.setPizzaToppings = this.setPizzaToppings.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  mapDispatchToProps(dispatch, bindActionCreators({
    addToCart
  })), dispatch)

  setPizzaOrderSize(size) {
      this.setState({pizzaOrderSize: size})
  }

  setPizzaToppings(topping) {
    if (topping.add) {
      let toppingArray = [...this.state.pizzaOrderToppings, topping.topping]
      this.setState({pizzaOrderToppings: toppingArray})
    } else {
      const index = this.state.pizzaOrderToppings.indexOf(topping.topping)
      if (index > -1) {
        let toppingArray = this.state.pizzaOrderToppings.filter((topping, i) => i !== index)
        this.setState({pizzaOrderToppings: toppingArray})
      }
    }
  }

  handleSubmit(e) {
    const pizzaToAdd = {size: this.state.pizzaOrderSize, toppings: this.state.pizzaOrderToppings}
    console.log(pizzaToAdd);
    e.preventDefault()
  }

  render() {

    return (
      <Grid>
        <h1>Order Your Pizza</h1>
        <Col xs={6}>
          <form onSubmit={this.handleSubmit}>
            <FormGroup>
              <h2>Choose Your Size</h2>
              <SizeDropdown
              onSizeChange={this.setPizzaOrderSize}
              pizzaSizes={this.state.pizzaSizes}
              />
            </FormGroup>
            <FormGroup>
              <h2>Choose Your Toppings</h2>
              <ToppingCheckboxes
              onToppingChange={this.setPizzaToppings}
              pizzaToppings={this.state.pizzaToppings} />
            </FormGroup>
            <Button type="submit">
              Add To Order
            </Button>
          </form>
        </Col>
        <Col xs={6}>
          <h2>Your Pizza</h2>
          <p>Size: {this.state.pizzaOrderSize}</p>
          <p>Toppings: </p>
          <ul>
          {this.state.pizzaOrderToppings.map((topping, idx) =>
            <li key={idx}>{topping}</li>
          )}
          </ul>
        </Col>
      </Grid>
    )
  }
}
