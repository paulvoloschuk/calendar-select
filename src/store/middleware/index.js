import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import dataService from './dataService'

export default applyMiddleware(
  dataService,
  thunk,
)
