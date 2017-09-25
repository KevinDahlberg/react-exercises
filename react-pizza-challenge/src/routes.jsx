'use static'

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';

import Home from './views/Home.jsx'
import Cart from './views/Cart.jsx'
import Checkout from './views/Checkout.jsx'

export default class Routes extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path='/' component={Home}/>
          <Route path='/Home' component={Home}/>
          <Route path='/Cart' component={Cart}/>
          <Route path='/Checkout' component={Checkout}/>
        </Switch>
      </main>
    )
  }
}
