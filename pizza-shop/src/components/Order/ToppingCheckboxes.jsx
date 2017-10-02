import React, { Component } from 'react'
import { Checkbox } from 'react-bootstrap'

export default class ToppingCheckboxes extends Component {

  render () {
    return(
      <div>
        {this.props.pizzaToppings.map((topping, idx) =>
          <Checkbox key={idx}>{topping.topping}</Checkbox>
        )}
      </div>
    )
  }
}
