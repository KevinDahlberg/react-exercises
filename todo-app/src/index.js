import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';

import './vendors/bootstrap/css/bootstrap.min.css'

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
