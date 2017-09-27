'use static'

import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render } from 'react-dom';

import Layout from './Layout.jsx';

import { createStore } from 'redux';
import { orderPizza } from './data/OrderReducer.js';

let store = createStore(orderPizza);

render ((
  <HashRouter>
    <Layout store={store} />
  </HashRouter>
),
  document.getElementById('container')
)
