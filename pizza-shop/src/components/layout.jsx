import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Menu from './Menu'
import Home from './Home'
import Order from '../containers/Order'
import Cart from '../containers/Cart'

const Layout = () => (
  <div className="body">
    <Switch>
      <div>
      <Menu />
      <Route exact path="/" component={Home} />
      <Route exact path="/order" component={Order} />
      <Route exact path="/cart" component={Cart} />
      </div>
    </Switch>
  </div>
)

export default Layout
