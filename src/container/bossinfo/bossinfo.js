import React from 'react'
import { NavBar } from 'antd-mobile'

class BossInfo extends React.Component{
  constructor (props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <NavBar mode="dark">BOSS完善信息页面</NavBar>
      </div>
    )
  }
}

export default BossInfo