import React from 'react'
import { connect } from 'react-redux'
import { List, Badge } from 'antd-mobile'

@connect(
  state => state
)

class Msg extends React.Component{
  constructor (props) {
    super(props)
    this.state = {}
  }
  getLast (arr) {
    return arr[arr.length - 1]
  }
  render () {
    // if (!this.props.chat.chatmsg.length) {
    //   return
    // }
    const Item = List.Item
    const Brief = Item.Brief
    const userid = this.props.user._id
    const userInfo = this.props.chat.users
    const msgGroup = {}
    this.props.chat.chatmsg.forEach(v => {
      msgGroup[v.chatid] = msgGroup[v.chatid] || []
      msgGroup[v.chatid].push(v)
    })
    const chatList = Object.values(msgGroup).sort((a, b) => {
      const a_last = this.getLast(a).create_time
      const b_last = this.getLast(b).create_time
      console.log(a_last, b_last)
      return b_last - a_last
    })
    console.log(chatList)
    return (
      <div id="chat-page">
          {chatList.map(v => {
            const lastItem = this.getLast(v)
            const targetId = lastItem.from === userid ? lastItem.to : lastItem.from
            const unreadNum = v.filter(v => !v.read && v.to === userid).length
            if (!userInfo[targetId]) {
              return null
            }
            const name = userInfo[targetId] ? userInfo[targetId].name : ''
            const avatar = userInfo[targetId] ? userInfo[targetId].avatar : ''
            return (
              <List  key={lastItem._id}>
                <Item
                  extra={<Badge text={unreadNum} />}
                  thumb={require(`../img/${avatar}.png`)}
                  arrow="horizontal"
                >
                  {lastItem.content}
                  <Brief>{name}</Brief>
                </Item>
              </List>
            )
          })}
      </div>
    )
  }
}

export default Msg