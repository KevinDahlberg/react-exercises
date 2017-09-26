'addSize',
'addToppings',
'clearOrder'

'use static';

import Reflux from 'reflux';
import OrderActions from '../actions/order';

let _order = {size: '', toppings: []}

export default class OrderStore extends Reflux.Store {
  constructor()
  {
    super();
    this.state = _order
    this.listenables = OrderActions;
  }

  onAddSize(item) {
    _order.size = item;
    this.setState(_order);
  }

  onAddToppings(item) {
    _order.toppings.push(item)
    this.setState(_order);
  }

  onClearOrder(item) {
    _order = {size: '', toppings: []}
    this.setState(_order);
  }

  emit() {
    this.trigger(_cart);
  }
}
