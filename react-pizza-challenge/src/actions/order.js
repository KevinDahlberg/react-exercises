'use static';

import Reflux from 'reflux';

let orderActions = Reflux.createActions ([
  'orderAdded',
  'orderEdited'
]);

module.exports = orderActions;
