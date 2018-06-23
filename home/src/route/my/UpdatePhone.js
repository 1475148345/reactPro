import React, { Component } from 'react';
import Header from '../../components/Header';
import { SubmitBotton } from '../../components/Base';
import { returnBack } from '../../lib/util';
import PropTypes from 'prop-types';
class UpdatePhone extends Component {
  static contextTypes = {
      store: PropTypes.object,
  };
  constructor(props){
    super(props);
    this.state={
      myInfo:{}
    }
  }
  /* 获取个人资料 */
  componentDidMount(){
    let myInfo=this.context.store.getState().myInfo;
    this.setState({myInfo});
  }
  /* 修改提交 */
  submit=()=>{
    this.props.history.push('/my/changePhone');
  }
  render() {
    let phone=this.state.myInfo.phone;
    return (
      <div className="App">
        <Header title="手机号" leftIcon='angle-left' leftIconAction={() => { returnBack(this.props) }} />
        <section className="contain">
            <div className="update">
                {
                  phone?
                  <div  className="bind-phone">
                    <i className={phone?'bind-phone-icon':'not-bind-phone-icon'}></i>
                    <span>{phone?`绑定的手机号：${phone}`:'你还没有绑定任何手机号'}</span>
                  </div>
                  :
                  null
                }
            </div>
            {/* 提交按钮 start */}
            <SubmitBotton title={phone?"更换绑定":"立即绑定"} submitButtonSty='mt-140' onPressAction={()=>{this.submit()}} />
            {/* 提交按钮 end */}
        </section>
      </div>
    );
  }
}
export default UpdatePhone;
