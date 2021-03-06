import { createStore, applyMiddleware, compose } from 'redux'
import { createDynamix } from 'redux-dynamix'
import rootReducer from './RootReducer'

const logger = (store) => (next) => (action) => {
  console.log('dispatching', action)
  const result = next(action)
  console.log('next state', store.getState())
  return result
}

const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(createDynamix(), applyMiddleware(logger)),
  )
  return store
}

export default configureStore
