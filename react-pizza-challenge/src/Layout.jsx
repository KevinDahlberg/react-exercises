'use strict';

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory'

//components
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'

//Routes
import Home from './views/Home.jsx'
import Checkout from './views/Checkout.jsx'
import Cart from './views/Cart.jsx'


const history = createHashHistory();

const Layout = () => (
  <div>
    <Nav />
    <Router history={ history }>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </Router>
    <Footer />
  </div>
);

module.exports = Layout;
