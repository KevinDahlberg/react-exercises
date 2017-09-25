'use strict'

import React, { Component } from 'react';

import PizzaDropdown from '../components/PizzaSizes.jsx'
import ToppingDropdown from '../components/PizzaToppings.jsx'


export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <PizzaDropdown />
        <ToppingDropdown />
      </div>
    )
  }

}
