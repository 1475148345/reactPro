import React, { Component } from 'react';
import Header from '../../components/Header';
import { SubmitBotton } from '../../components/Base';
import { returnBack,http,setParam } from '../../lib/util';
import PropTypes from 'prop-types';
import { apiConfig } from '../../lib/config';
class ChangePhone extends Component {
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
    let myInfo=this.context.store.getState();
    this.setState({myInfo});
  }
  /* 输入框 */
  changeValue=(value,types)=>{
    let myInfo=this.state.myInfo;
    myInfo[types]=value.target.value;
    this.setState({myInfo})
  }
  /* 发送短信获取验证码 */
  sendSMS=()=>{
    let myInfo=this.state.myInfo;
    let param={
      phone:myInfo.phone
    }
    var that=this;
    http(apiConfig.sendSMS+setParam(param)).then(function (res) {
      console.log(res)
      if(res.status===1){
        returnBack(that.props)
      }
    });
  }
  /* 修改提交 */
  submit=()=>{
    let myInfo=this.state.myInfo;
    let param={
      job:myInfo.job,
      id:myInfo.id
    }
    var that=this;
    http(apiConfig.updateMyInfo+setParam(param)).then(function (res) {
      if(res.status===1){
        returnBack(that.props)
      }
    });
  }
  render() {
    let myInfo=this.state.myInfo;
    return (
      <div className="App">
        <Header title={myInfo.phone?"更换绑定":"立即绑定"} leftIcon='angle-left' leftIconAction={() => { returnBack(this.props) }} />
        <section className="contain">
            <div className="update">
               <input defaultValue={myInfo.phone} placeholder="请输入手机号" type="text" onChange={(e)=>{
                  this.changeValue(e,'phone');
                }} />
               <div className="get-yzm flex flex-ai-c">
                <input placeholder="请输入验证码" type="text" onChange={(e)=>{
                  this.changeValue(e,'yzm');
                }} />
                <span onClick={()=>{this.sendSMS()}}>获取验证码</span>
               </div>
            </div>
            {/* 提交按钮 start */}
            <SubmitBotton title="提交" submitButtonSty='mt-140' onPressAction={()=>{this.submit()}} />
            {/* 提交按钮 end */}
        </section>
      </div>
    );
  }
}
export default ChangePhone;
