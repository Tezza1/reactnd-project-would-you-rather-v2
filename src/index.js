import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import applyMiddleware from './store/middleware'
import rootReducer from './store/reducers'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware))
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'))

serviceWorker.unregister()
