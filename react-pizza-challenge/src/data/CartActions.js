'use static';

import Redux from 'redux';

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_CART = 'CLEAR_CART';

export const addToCart = (pizza) => {
  return {
    type: ADD_TO_CART,
    pizza
  }
}

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id
  }
}

export const clearCart = (array) => {
  return {
    type: CLEAR_CART,
    array
  }
}
