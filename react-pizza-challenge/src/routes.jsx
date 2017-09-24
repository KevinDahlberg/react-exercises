'use strict';

import React from 'react';
import Layout from './layout.jsx';
import { Router, Route, Switch } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory'

const history = createHashHistory();
const Routes = () => (
  <Router history={ history }>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Cart" component={Cart} />
      <Route exact path="/checkout" component={Checkout} />
    </Switch>
  </Router>
);

module.exports = Routes;
