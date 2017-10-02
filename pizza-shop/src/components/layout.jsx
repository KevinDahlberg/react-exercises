import React from 'react'
import { Provider } from 'react-redux'
import { Route, Router } from 'react-router-dom'

import Home from './Home'
const Layout = () => (
  <div className="body">
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  </div>
)

export default Layout
