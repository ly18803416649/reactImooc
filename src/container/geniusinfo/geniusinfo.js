import React from 'react'
import {Redirect} from "react-router-dom";
import {Button, InputItem, NavBar, TextareaItem} from "antd-mobile";
import AvatarSelector from "../../component/avatar-selector/avatar-selector";
import { connect } from 'react-redux'
import { update } from '../../redux/user,redux'

@connect(
  state => state.user,
  { update }
)

class GeniusInfo extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      desc: ''
    }
  }
  onChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  render() {
    const path = this.props.location.pathname
    const redirectTo = this.props.redirectTo
    return (
      <div>
        {redirectTo && redirectTo!==path ? <Redirect to={this.props.redirectTo} /> : null}
        <NavBar mode="dark">牛人完善信息页面</NavBar>
        <AvatarSelector selectAvatar={(imgname) => {
          this.setState({
            avatar: imgname
          })
        }} />
        <InputItem onChange={v=>this.onChange('title', v)}>求职岗位</InputItem>
        <TextareaItem
          title="个人简介"
          placeholder="请输入职位要求"
          onChange={v=>this.onChange('desc', v)}
          rows={3}
          autoHeight
        />
        <Button type="primary" onClick={() => {this.props.update(this.state)}}>保存</Button>
      </div>
    )
  }
}

export default GeniusInfo