import React from 'react'
import { NavBar } from 'antd-mobile';

function Boss() {
  return <h2>Boss</h2>
}

class DashBoard extends React.Component{
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    const navList = [
      {
        path: '/boss',
        text: '牛人',
        icon: 'boss',
        title: '牛人列表',
        component: Boss
      }
    ]

    return (
      <div>
        <NavBar
          mode="dark"
          leftContent="Back"
        >NavBar</NavBar>
      </div>
    )
  }
}

export default DashBoard