import React, { Component } from 'react';
import Header from '../../components/Header';
import { ListButton,SubmitBotton } from '../../components/Base';
import { returnBack,changeNavStatus,http,setParam } from '../../lib/util';
import PropTypes from 'prop-types';
import { apiConfig } from '../../lib/config';
class UpdateSex extends Component {
  static contextTypes = {
      store: PropTypes.object,
  };
  constructor(props){
    super(props);
    this.state={
      myInfo:{},
      sex:[
        {title:1,active:true},
        {title:2,active:false}
      ]
    }
  }
  /* 初始化性别 */
  componentDidMount(){
    let myInfo=this.context.store.getState().myInfo,sex=this.state.sex;
    let newSex = changeNavStatus(sex,myInfo.sex-1);
    this.setState({myInfo,sex:newSex});
  }
  /* 切换性别 */
  updateSex=(index)=>{
    var newSex = changeNavStatus(this.state.sex,index);
    this.setState({sex:newSex});
  }
  /* 修改提交 */
  submit=()=>{
    let sexArr=this.state.sex,myInfo=this.state.myInfo;
    sexArr.map((v)=>{
      if(v.active){
        myInfo.sex=v.title;
      }
      return true;
    });
    let param={
      sex:myInfo.sex,
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
        <Header title="性别" leftIcon='angle-left' leftIconAction={() => { returnBack(this.props) }} />
        <section className="contain">
            <div className="update">
                {
                  this.state.sex.map((v,i)=>{
                    return(
                      v.active?
                      <ListButton key={i} centerTitle={v.title===1?'男':'女'} viewSty='my-info-sty' rightIcon='check-radio' onPressAction={()=>{this.updateSex(i)}} />
                      :
                      <ListButton key={i} centerTitle={v.title===1?'男':'女'} viewSty='my-info-sty' rightIconNone={true} onPressAction={()=>{this.updateSex(i)}} />
                    )
                  })
                }
            </div>
            {/* 提交按钮 start */}
            <SubmitBotton title="完成设置" submitButtonSty='mt-140' onPressAction={()=>{this.submit()}} />
            {/* 提交按钮 end */}
        </section>
      </div>
    );
  }
}
export default UpdateSex;
