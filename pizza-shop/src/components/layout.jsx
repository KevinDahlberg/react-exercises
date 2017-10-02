import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'

const Layout = () => (
  <div className="body">
    <Switch>
      <div>
      <Route exact path="/" component={Home} />
      </div>
    </Switch>
  </div>
)

export default Layout
