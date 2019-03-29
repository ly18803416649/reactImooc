import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './config'

import reducers from './reducer'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute  from './component/authroute/authroute'
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from "./container/geniusinfo/geniusinfo";
import DashBoard from './component/dashboard/dashboard'
import './index.css'


const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

// function Boss () {
//   return <h2>Boss</h2>
// }

// function Dashboard () {
//   return <h2>Dashboard</h2>
// }

ReactDom.render(
  (<Provider store={store}>
    <BrowserRouter>
      <AuthRoute />
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/bossinfo' component={BossInfo} />
        <Route path='/geniusinfo' component={GeniusInfo} />
        <Route component={DashBoard} />
      </Switch>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
)
