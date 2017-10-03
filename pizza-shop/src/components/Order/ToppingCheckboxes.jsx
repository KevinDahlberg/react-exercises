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
    const toppings = [
            {topping: 'Pepperoni', cost: 1},
            {topping: 'Sausage', cost: 1},
            {topping: 'Canadian Bacon', cost: 1},
            {topping: 'Pineapple', cost: 1},
            {topping: 'Jalapeno Peppers', cost: 1},
            {topping: 'Mushrooms', cost: 1}
          ]
          
    return(
      <div>
        {this.createCheckboxes(toppings)}
      </div>
    )
  }
}
