import React from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'
import { getUserList } from "../../redux/chatuser.redux";
import UserCard from '../usercard/usercard'

@connect(
  state => state.chatuser,
  { getUserList }
)

class Genius extends React.Component{
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
    this.props.getUserList('boss')
  }
  render () {
    console.log(this.state);

    return <UserCard userList={this.props.userList} />
  }
}

export default Genius