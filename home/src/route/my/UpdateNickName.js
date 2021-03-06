import React, { Component } from 'react';
import Header from '../../components/Header';
import { SubmitBotton } from '../../components/Base';
import { returnBack,http,setParam } from '../../lib/util';
import PropTypes from 'prop-types';
import { apiConfig } from '../../lib/config';
class UpdateNickName extends Component {
  static contextTypes = {
      store: PropTypes.object,
  };
  constructor(props){
    super(props);
    this.state={
      myInfo:{}
    }
  }
  /* 初始化性别 */
  componentDidMount(){
    let myInfo=this.context.store.getState().myInfo;
    this.setState({myInfo});
  }
  /* 修改昵称 */
  changeValue=(value)=>{
    let myInfo=this.state.myInfo;
    myInfo.nickName=value.target.value;
    this.setState({myInfo})
  }
  /* 修改提交 */
  submit=()=>{
    let myInfo=this.state.myInfo;
    let param={
      nickName:myInfo.nickName,
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
    return (
      <div className="App">
        <Header title="用户名" leftIcon='angle-left' leftIconAction={() => { returnBack(this.props) }} />
        <section className="contain">
            <div className="update">
                <input type="text" defaultValue={this.state.myInfo.nickName} onChange={(e)=>{
                  this.changeValue(e);
                }} />
            </div>
            {/* 提交按钮 start */}
            <SubmitBotton title="完成" submitButtonSty='mt-140' onPressAction={()=>{this.submit()}} />
            {/* 提交按钮 end */}
        </section>
      </div>
    );
  }
}
export default UpdateNickName;
