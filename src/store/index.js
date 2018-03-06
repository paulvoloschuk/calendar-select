import { createStore, compose } from 'redux'

import middleware from './middleware'
import reducers from './reducers'

const initialState = {}
const enhancers = []

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  middleware,
  ...enhancers
)

const store = createStore(
  reducers,
  initialState,
  composedEnhancers
)

export default store
