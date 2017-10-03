import React, { Component } from 'react'
import { Checkbox, InputGroup } from 'react-bootstrap'

export default class ToppingCheckboxes extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.props.onToppingChange({
      topping: name,
      add: value
    })
  }

  createCheckbox = (topping, idx) => (
    <Checkbox
      name= {topping.topping}
      label={idx}
      onChange={this.handleInputChange}
      type="checkbox"
      aria-label="topping {topping.topping}"
      key={idx}>
      {topping.topping}
    </Checkbox>
  )

  createCheckboxes = (topping) => (
    topping.map(this.createCheckbox)
  )

  render () {
    const toppings = this.props.pizzaToppings
    return(
      <div>
        {this.createCheckboxes(toppings)}
      </div>
    )
  }
}
