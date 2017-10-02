import React from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import Layout from .'components/layout'
import store, { history } from './data/store'

const App = () => {
  <div>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Layout />
      </ConnectedRouter>
    </Provider>
  </div>
}

export default App;
