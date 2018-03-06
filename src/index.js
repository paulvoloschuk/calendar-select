import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import Application from './container'
import ReactDOM from 'react-dom'
import store from './store'
import React from 'react'
import './index.css'

ReactDOM.render(
  <Provider {...{store}}>
    <Application />
  </Provider>,
 document.getElementById('root')
)


registerServiceWorker()
