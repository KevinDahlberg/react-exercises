'use static';

import Reflux from 'reflux';
import CartActions from '../actions/cart';

let _cart = {cart: []}

export default class CartStore extends Reflux.createStore {
  constructor()
  {
    super();
    this.state = {}
    }
    this.listenables = Actions;
  }

  onAddToCart(item) {
    _cart.cart.push(item);
    this.setState(_cart);
    this.emit();
  }

  onRemoveFromCart(item) {
    _cart.cart = _cart.cart.filter((cartItem) => {
      return item !== cartItem
    });
    this.setState(_cart);
    this.emit();
  }

  onClearCart(item) {
    _cart.cart = [];
    this.setState(_cart);
    this.emit();
  }

  emit() {
    this.trigger(_cart);
  }
}
