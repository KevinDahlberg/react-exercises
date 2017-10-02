import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Menu from './Menu'
import Home from './Home'
import Cart from './Cart'

const Layout = () => (
  <div className="body">
    <Switch>
      <div>
      <Menu />
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
      </div>
    </Switch>
  </div>
)

export default Layout
