import React from 'react'
import R from 'ramda'
import {browserHistory} from 'react-router'
import {loggedIn, getIdToken, setLockProfile} from '../../../modules/auth/core'

import PageLoading from '../../shared/icons/PageLoading'

const Login = React.createClass({
  componentDidMount() {
    const {lock} = this.props

    if (loggedIn()) {
      browserHistory.push('/dashboard')
    } else {
      lock.show()
    }
  },
  render() {
    return <div><PageLoading /></div>
  }
})

export default Login
