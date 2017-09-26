'use static';

import Reflux from 'reflux';

let cartActions = Reflux.createActions ([
  'AddToCart',
  'RemoveFromCart',
  'ClearCart'
]);

module.exports = orderActions;
