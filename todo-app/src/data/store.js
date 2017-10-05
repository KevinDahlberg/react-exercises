import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer } from './TodoRedux'

export default function configureStore() {
  return createStore(
    reducer,
    applyMiddleware(
      thunkMiddleware
    )
  )
}
