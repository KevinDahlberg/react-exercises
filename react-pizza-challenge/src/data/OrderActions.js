'use static';

import Reflux from 'reflux';

let OrderActions = Reflux.createActions ([
  'addSize',
  'addToppings',
  'clearOrder'
]);

module.exports = OrderActions;
