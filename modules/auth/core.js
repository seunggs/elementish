import R from 'ramda'
import Rx from 'rx-lite'
import {browserHistory} from 'react-router'
import {IMG_BASE_URL, AUTH0_URL} from '../global/constants'
import {convertQueryStrToObj} from '..//global/core'
import {LOGGEDIN_ID, NOTIFICATION_ID, LOGIN_BUTTON_ID} from '../state/constants'
import {changeState} from '../state/events'
import {sendUserLoginEvent} from '../users/events'
import {getUserObj$$} from './observables'

/* --- IMPURE --------------------------------------------------------------- */

// getLock :: {*} -> {*} (IMPURE)
export const getLock = lockOptions => {
  const lock = new Auth0Lock('u4wI4sQ5wmwjqONJunkb7GHRQy9L0tih', AUTH0_URL, lockOptions)
  return lock
}

export const setLockProfile = (lock, idToken) => {
  if (!global.localStorage.getItem('profile')) {
    lock.getProfile(idToken, (err, profile) => {
      if (err) { return }
      global.localStorage.setItem('profile', JSON.stringify(profile))
    })
  }
}

export const getIdToken = () => global.localStorage.getItem('id_token')

// loggedIn :: () -> Boolean (IMPURE)
export const loggedIn = () => {
  const idToken = global.localStorage.getItem('id_token')

  if (!idToken) {
    const hashObj = convertQueryStrToObj(global.location.hash)
    if (hashObj.id_token) {
      global.localStorage.setItem('id_token', hashObj.id_token)
      return true
    } else {
      return false
    }
  }

  return true

  return !idToken ? false : true
}

// requireAuth :: {*} -> ({*} -> IMPURE) -> IMPURE
export const requireAuth = (nextState, replace, cb) => {
  if (!loggedIn()) {
    console.log('not logged in')
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
    cb()
  } else {
    console.log('logged in')
    cb()
  }
}

export const logout = () => {
  global.localStorage.removeItem('id_token');
}

export const addUser = (admin = false) => {

}
