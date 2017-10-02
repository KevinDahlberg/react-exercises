import React, { Component } from 'react'

export default class Order extends Component {

  static defaultProps = {
    pizzaSizes: [
      {size: 'Large', cost: 8},
      {size: 'Medium', cost: 7},
      {size: 'Small', cost: 6}
    ]
  }
  
  render() {
    return (
      <p>Order</p>
    )
  }
}
