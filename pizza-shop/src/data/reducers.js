import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  CONFIRM_CART,
  CONFIRM_ORDER,
} from './actions'

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

function orderReducer (state = {}, action) {
  if (action.type === 'CONFIRM_ORDER'){
    return { ...state, cart: []}
  } else {
    return state
  }
}

const rootReducer = combineReducers({
  cartReducer,
  orderReducer,
  routing: routerReducer
})

export default rootReducer
