import React, { Component } from 'react'
import { FormGroup, InputGroup} from 'react-bootstrap'

import ToppingCheckboxes from '../components/Order/ToppingCheckboxes'

export default class OrderForm extends Component {

  render() {
    return (
      <form>
        <FormGroup>
        </FormGroup>
        <FormGroup>
          <ToppingCheckboxes pizzaToppings= {this.props.pizzaToppings} />
        </FormGroup>
      </form>
    )
  }
}
