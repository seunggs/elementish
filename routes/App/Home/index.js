import React from 'react'
import R from 'ramda'
import {browserHistory} from 'react-router'

const Home = React.createClass({
  componentDidMount() {
    console.log('Home ran!')
    const {location} = this.props
    if (!R.isEmpty(location.hash)) {
      console.log('location.hash: ', location.hash)
      location.hash()
      browserHistory.push('/dashboard')
    } else {
      browserHistory.push('/login')
    }
  },
  render() {
    return <div></div>
  }
})

export default Home
