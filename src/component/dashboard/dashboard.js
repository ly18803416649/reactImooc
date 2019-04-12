import React from 'react'
import { NavBar } from 'antd-mobile';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import NavLinkBar from '../navlink/navlink'
import Boss from '../boss/boss'

// function Boss() {
//   return <h2>Boss</h2>
// }
function Genius() {
  return <h2>Genius</h2>
}
function Msg() {
  return <h2>Msg</h2>
}
function User() {
  return <h2>User</h2>
}

@connect(
  state => state
)

class DashBoard extends React.Component{
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    const {pathname} = this.props.location
    const user = this.props.user
    const navList = [
      {
        path: '/boss',
        text: '牛人',
        icon: 'boss',
        title: '牛人列表',
        component: Boss,
        hide: user.type === 'genuis'
      },
      {
        path: '/genius',
        text: 'boss',
        icon: 'job',
        title: 'Boss列表',
        component: Genius,
        hide: user.type === 'boss'
      },
      {
        path: '/msg',
        text: '消息',
        icon: 'msg',
        title: '消息列表',
        component: Msg
      },
      {
        path: '/me',
        text: '我',
        icon: 'user',
        title: '个人中心',
        component: User
      }
    ]

    return (
      <div>
        <NavBar
          className="fixed-header"
          mode="dark"
          leftContent="Back"
        >{navList.find(v => v.path===pathname).title}</NavBar>
        <div style={{marginTop: 45}}>
          <Switch>
            {navList.map(v => (
              <Route key={v.path} path={v.path} component={v.component} />
            ))}
          </Switch>
        </div>
        <NavLinkBar data={navList} />
      </div>
    )
  }
}

export default DashBoard