export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const CLEAR_CART = 'CLEAR_CART'
export const CONFIRM_CART = 'CONFIRM_CART'
export const CONFIRM_ORDER = 'CONFIRM_ORDER'

export function addToCart(product){
  return {
    type: ADD_TO_CART,
    product
  }
}

export function removeFromCart(product) {
  return {
    type: REMOVE_FROM_CART,
    product
  }
}

export function clearCart (productArray) {
  type: CLEAR_CART,
  productArray
}

export function confirmCart(productArray) {
  type: CONFIRM_CART,
  productArray
}

export function confirmOrder(productArray) {
  type: CONFIRM_ORDER,
  productArray
}
