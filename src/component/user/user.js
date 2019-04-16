import React from 'react'
import { connect } from 'react-redux'
import { Result, WhiteSpace, List, Button, Modal } from 'antd-mobile';
import browserCookies from 'browser-cookies'
import { logoutSubmit } from '../../redux/user,redux'
import { Redirect } from "react-router-dom";

@connect(
  state => state.user,
  { logoutSubmit }
)

class User extends React.Component{
  constructor (props) {
    super(props)
    this.state = {}
    this.logouts = this.logouts.bind(this);
  }
  logouts() {
    // browserCookies.erase('userid')
    const alert = Modal.alert;
    alert('注销', '确认退出吗???', [
      { text: '取消', onPress: () => console.log('cancel') },
      { text: '确认', onPress: () => {
          browserCookies.erase('userid')
          this.props.logoutSubmit()
      }},
    ])
  }
  render () {
    const props = this.props
    const Item = List.Item;
    const Brief = Item.Brief;
    console.log(this.props)
    return props.user ? (
      <div>
        <Result
          img={<img src={require(`../img/${this.props.avatar}.png`)} alt="" style={{width: 50}}/>}
          title={props.user}
          message={props.type === 'boss' ? props.company : null}
        />
        <WhiteSpace />
        <List renderHeader={() => '简介'}>
          <Item multipleLine>
            {props.title}
            {this.props.desc.split('\n').map((v) => (
              <Brief key={v}>{v}</Brief>
            ))}
            {props.money ? <Brief>薪资：{props.money}</Brief> : null}
          </Item>
        </List>
        <WhiteSpace />
        {/*<List>*/}
          {/*<Item onClick={this.logouts}>退出登录</Item>*/}
        {/*</List>*/}
        <Button onClick={this.logouts} type="primary">退出登录</Button>
      </div>
    ) : <Redirect to={this.props.redirectTo} />
  }
}

export default User