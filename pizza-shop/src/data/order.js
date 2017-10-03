export const CONFIRM_ORDER = 'CONFIRM_ORDER'

export function confirmOrder(productArray) {
  type: CONFIRM_ORDER,
  productArray
}

function orderReducer (state = {}, action) {
  if (action.type === 'CONFIRM_ORDER'){
    return { ...state, cart: []}
  } else {
    return state
  }
}

export default orderReducer
