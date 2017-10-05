export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const CLEAR_CART = 'CLEAR_CART'
export const CONFIRM_CART = 'CONFIRM_CART'

const initialState = {
  cart: []
}

export function addToCart (cartArray) {
  console.log('add to cart is firing');
  return {
      type: ADD_TO_CART,
      cart: cartArray
    }
}

export function removeFromCart(cartArray) {
  return dispatch => {
    dispatch({
      type: REMOVE_FROM_CART,
      cart: cartArray
    })
  }
}

export function clearCart (cartArray) {
  return dispatch => {
    dispatch({
      type: CLEAR_CART,
      cart: cartArray
    })
  }
}

export function confirmCart(cartArray) {
  return dispatch => {
    dispatch({
      type: CONFIRM_CART,
      cart: cartArray
    })
  }
}

function cartReducer (state = initialState, action) {
  console.log('reducer is firing, ', action);
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: action.cart}
    case REMOVE_FROM_CART:
      return { ...state, cart: action.cart}
    case CLEAR_CART:
      return { ...state, cart: []}
    case CONFIRM_CART:
      return state
    default:
      return state
  }
}

export default cartReducer
