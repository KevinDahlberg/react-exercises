import React, { Component } from 'react'
import { Grid, FormGroup, Col, Button} from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import SizeDropdown from '../components/Order/SizeDropdown'
import ToppingCheckboxes from '../components/Order/ToppingCheckboxes'
import ViewOrder from '../components/Order/ViewOrder'

import { addToCart } from '../data/cart'

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzaOrderSize: '',
      pizzaOrderToppings: []
    }
    this.setPizzaOrderSize = this.setPizzaOrderSize.bind(this)
    this.setPizzaToppings = this.setPizzaToppings.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


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
    console.log(this.state, this.props);
    e.preventDefault()
    const pizzaToAdd = {size: this.state.pizzaOrderSize, toppings: this.state.pizzaOrderToppings}
    const newCart = [...this.props.cart, pizzaToAdd]
    // const action = {type: ADD_TO_CART, cart: newCart}
    const { addToCart } = this.props
    addToCart(newCart)
    this.setState ({pizzaOrderSize: '', pizzaOrderToppings: []})
    document.getElementById("order-form").reset();
  }

  render() {

    return (
      <Grid>
        <h1>Order Your Pizza</h1>
        <Col xs={6}>
          <form id="order-form" onSubmit={this.handleSubmit}>
            <FormGroup>
              <h2>Choose Your Size</h2>
              <SizeDropdown
              onSizeChange={this.setPizzaOrderSize}
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
          <ViewOrder
            pizzaOrderSize = {this.state.pizzaOrderSize}
            pizzaOrderToppings = {this.state.pizzaOrderToppings}
          />
        </Col>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cartReducer.cart
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({addToCart}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
