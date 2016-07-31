import React from 'react'
import R from 'ramda'
import {browserHistory} from 'react-router'
import {loggedIn, getIdToken, setLockProfile} from '../../../modules/auth/core'

const Login = React.createClass({
  componentDidMount() {
    const {lock} = this.props

    if (loggedIn()) {
      const idToken = getIdToken()
      setLockProfile(lock, idToken)
      browserHistory.push('/dashboard')
    } else {
      lock.show()
    }
  },
  render() {
    return (
      <div></div>
    )
  }
})

export default Login
