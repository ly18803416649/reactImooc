import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from "react-router-dom"
import './config'

import reducers from './reducer'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute  from './component/authroute/authroute'

import './index.css'

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

function Boss () {
  return <h2>Boss</h2>
}

ReactDom.render(
  (<Provider store={store}>
    <BrowserRouter>
      <AuthRoute></AuthRoute>
      <Route path='/login' component={Login}></Route>
      <Route path='/register' component={Register}></Route>
      <Route path='/boss' component={Boss}></Route>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
)
