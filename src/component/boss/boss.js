import React from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { getUserList } from "../../redux/chatuser.redux";

@connect(
  state => state.chatuser,
  { getUserList }
)

class Boss extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount () {
    // axios.get('/user/list?type=genuis')
    //   .then(res => {
    //     if (res.data.code === 0) {
    //       this.setState({data: res.data.data})
    //     }
    //   })
    this.props.getUserList('genuis')
  }
  render () {
    console.log(this.state);
    const Header = Card.Header;
    const Body = Card.Body
    return (
      <WingBlank>
        <WhiteSpace />
        {this.props.userList.map((v, index) => (
          v.avatar ? <Card key={index}>
            <Header title={v.user} thumb={require(`../img/${v.avatar}.png`)} extra={<span>{v.title}</span>} />
            <Body>
              {v.desc.split('\n').map(v => (
                <div key={v}>{v}</div>
              ))}
            </Body>
          </Card> : null
        ))}
      </WingBlank>
    )
  }
}

export default Boss