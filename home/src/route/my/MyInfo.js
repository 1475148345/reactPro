import React, { Component } from 'react';
import { Link} from 'react-router-dom'
import Header from '../../components/Header';
import { ListButton } from '../../components/Base';
import { returnBack } from '../../lib/util';
import PropTypes from 'prop-types';
class MyInfo extends Component {
  static contextTypes = {
      store: PropTypes.object,
  };
  constructor(props){
    super(props);
    this.state={
      myInfo:{}
    }
  }
  
  componentDidMount(){
      this.setState({myInfo:this.context.store.getState().myInfo});
  }
  render() {
    let myInfo=this.state.myInfo;
    return (
      <div className="App">
        <Header title="个人资料" leftIcon='angle-left' leftIconAction={() => { returnBack(this.props) }} />
        <section className="contain">
          <ListButton leftTitle='头像' centerImg={require('../../images/my/avatar.jpg')} viewSty='my-info-sty' centerSty='fs-28 color-333 tx-r' />
          <Link to="/my/updateSex"><ListButton leftTitle='性别' centerTitle={myInfo.sex===1?'男':'女'} viewSty='my-info-sty' centerSty='fs-28 color-333 tx-r' /></Link>
          <Link to="/my/updateNickName"><ListButton leftTitle='用户名' centerTitle={myInfo.nickName} viewSty='my-info-sty' centerSty='fs-28 color-333 tx-r' /></Link>
          <Link to="/my/updateCompany"><ListButton leftTitle='企业' centerTitle={myInfo.company} viewSty='my-info-sty' centerSty='fs-28 color-333 tx-r' /></Link>
          <Link to="/my/UpdateJob"><ListButton leftTitle='职务' centerTitle={myInfo.job} viewSty='my-info-sty' centerSty='fs-28 color-333 tx-r' /></Link>
          <Link to="/my/updatePhone"><ListButton leftTitle='手机号' centerTitle={myInfo.phone || '未绑定'} viewSty='my-info-sty' centerSty={'fs-28 tx-r ' + (myInfo.phone ? 'color-333' : 'color-999')} /></Link>
        </section>
      </div>
    );
  }
}
export default MyInfo;
