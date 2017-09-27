'use static';

import Redux from 'redux';
import { addSize, ADD_SIZE } from './OrderActions'

const initialState = {
  size: '',
  toppings: []
}

export const orderPizza = (state=initialState, action) => {
  switch (action.type) {
    case ADD_SIZE:
      return Object.assign({}, state, {
        size: action.size
      })
    default:
      return state
  }
}
