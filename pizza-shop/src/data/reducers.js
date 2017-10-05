import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import cartReducer from './cart'

const rootReducer = combineReducers({
  cartReducer,
  routing: routerReducer
})

export default rootReducer
