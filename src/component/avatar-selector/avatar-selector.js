import React from 'react'
import { Grid, List } from 'antd-mobile';

class AvatarSelector extends React.Component{
  constructor (props) {
    super(props)
    this.state = {}
  }
  render() {
    const avatarList = 'boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,woman,zebra,whale'
      .split(',')
      .map(v => (
        {
          'icon':require(`../img/${v}.png`),
          'text':v
        }
      ));
    const grideHeader = this.state.text ? (<div><span>已选择头像</span><img style={{width: 18}} src={this.state.icon} alt=""/></div>) : '请选择头像';
    return (
      <div>
        <List renderHeader={() => grideHeader}>
          <Grid data={avatarList} columnNum={5} onClick={elm => {
            this.setState(elm)
            this.props.selectAvatar(elm.text)
          }} />
        </List>
      </div>
    )
  }
}

export default AvatarSelector