import React from 'react';
import { render } from 'react-dom';

import './vendors/bootstrap/css/bootstrap.min.css'
import './index.css';
import App from './components/App';

render (
  <App />,
  document.getElementById('root')
);
