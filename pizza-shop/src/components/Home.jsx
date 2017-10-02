import React, { Component } from 'react'

export default class Home extends Component {

  static defaultProps = {
    pizzaSizes: [
      {size: 'Large', cost: 8},
      {size: 'Medium', cost: 7},
      {size: 'Small', cost: 6}
    ]
  }
  render() {
    return (
      <h1>Welcome to the Home Page</h1>
    )
  }
}
