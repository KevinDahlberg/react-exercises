import React from 'react';
import { render } from 'react-dom';

import './vendors/bootstrap/css/bootstrap.min.css'
import './index.css';
import Root from './containers/Root';

render (
  <Root />,
  document.getElementById('root')
);
