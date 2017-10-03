import React, { Component } from 'react'

export default class ViewOrder extends Component {
  constructor (props){
    super(props)
  }

  render() {
    return (
      <div>
      <h2>Your Pizza</h2>
      <p>Size: {this.props.pizzaOrderSize}</p>
      <p>Toppings: </p>
      <ul>
      {this.props.pizzaOrderToppings.map((topping, idx) =>
        <li key={idx}>{topping}</li>
      )}
      </ul>
      </div>
    )
  }
}
