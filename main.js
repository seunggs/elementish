import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, IndexRedirect, Redirect, Link, browserHistory, RouterContext} from 'react-router'
import './assets/styles/main.css'
import Rx from 'rx-lite'
import R from 'ramda'
import {runCustomEventsPolyfill} from './modules/polyfill/custom-events'
import injectTapEventPlugin from 'react-tap-event-plugin'

import {state$} from 'state/observables'
import {changeState} from 'state/events'
import {getLock, requireAuth} from 'auth/core'

import App from './routes/App/'
import Home from './routes/App/Home/'
import Login from './routes/App/Login/'
import Main from './routes/App/Main/'
import Dashboard from './routes/App/Main/Dashboard/'

// CustomEvents polyfill for IE
runCustomEventsPolyfill()

// Needed for onTouchTap
// Can go away when react 1.0 release
injectTapEventPlugin()

const routes = (
  <Route path="/" component={App}>
    <IndexRedirect to="/dashboard" />
    {/*<IndexRoute component={Home} />*/}
    <Route path="login" component={Login} />
    <Route path="dashboard" component={Main} onEnter={requireAuth}>
      <IndexRoute component={Dashboard} />
      {/*<Route path="" />*/}
    </Route>
  </Route>
)

// Auth0 Lock
const lockOptions = {
  allowSignUp: false,
  allowedConnections: ['Username-Password-Authentication'],
  avatar: null,
  closable: false,
  auth: {
    redirectUrl: `http://127.0.0.1:4000/login`,
    responseType: 'token'
  }
}

const lock = getLock(lockOptions)

// Setup state
state$.subscribe(rootState => {
  const createElement = (Component, props) => {
    return <Component {...props} rootState={rootState} lock={lock} />
  }
  render((
    <Router routes={routes} createElement={createElement} history={browserHistory} />
  ), document.getElementById('app'))
})

// Initialize state
changeState('global', {})
