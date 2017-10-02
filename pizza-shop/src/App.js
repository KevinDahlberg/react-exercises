import React from 'react';
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import Layout from './components/Layout'
import store, { history } from './data/store'

const App = () => (
  <div>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Layout />
      </ConnectedRouter>
    </Provider>
  </div>
)

export default App;
