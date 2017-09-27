'use static';

import Redux from 'redux';

const ADD_SIZE = 'ADD_SIZE';
const ADD_TOPPINGS = 'ADD_TOPPINGS';
const CLEAR_ORDER = 'CLEAR_ORDER'

export const addSize = (size) => {
  return {
    type: ADD_SIZE,
    size
  }
}

export const addToppings = (toppings) => {
  return {
    type: ADD_TOPPINGS,
    toppings
  }
}

export const clearOrder = (defaultObj) => {
  return {
    type: CLEAR_ORDER,
    defaultObj
  }
}
