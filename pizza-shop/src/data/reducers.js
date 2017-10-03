import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import cartReducer from './cart'
import orderReducer from './order'

const rootReducer = combineReducers({
  cartReducer,
  orderReducer,
  routing: routerReducer
})

export default rootReducer
