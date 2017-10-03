export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const CLEAR_CART = 'CLEAR_CART'
export const CONFIRM_CART = 'CONFIRM_CART'


export const addToCart = (product) => {
  return dispatch => {
    dispatch({
      type: ADD_TO_CART,
        product
    })
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

function cartReducer (state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.product]}
    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter(product => action.product !== product)}
    case CLEAR_CART:
      return { ...state, cart: []}
    case CONFIRM_CART:
      return state
    default:
      return state
  }
}

export default cartReducer
