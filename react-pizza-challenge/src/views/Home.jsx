'use strict'

import React, { Component } from 'react';

import OrderPizza from '../components/OrderPizza.jsx'


export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <OrderPizza />
      </div>
    )
  }

}
