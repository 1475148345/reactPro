import React, { Component } from 'react';
import Header from '../../components/Header';
import { ListInput, SubmitBotton, ListTextArea } from '../../components/Base';
import { PcSelect } from '../../components/Dialog';
import { returnBack } from '../../lib/util';
import PropTypes from 'prop-types';
class PushRequire extends Component {
  static contextTypes = {
      store: PropTypes.object,
  };
  constructor(props) {
    super(props);
    this.state = {
      /* 提交参数 */
      submitParam: {

      },
      /* 弹窗内容 */
      popContent: {
        showPop: false,
        popTitle: '',
        popArr: [],
        popValue: '',
      },
      cityList:[],//城市数据
    }
  }
  componentDidMount(){
    //城市数据
    this.setState({cityList:this.context.store.getState().cityList});
  }
  /* 
  *显示弹窗
  *根据type设置弹窗显示内容
   */
  showSelect = (type) => {
    switch (type) {
      case 'addr':
        this.setState({
          popContent: {
            showPop: true,
            popTitle: '选择地区',
            popArr: this.state.cityList,
            popValue: '',
          }
        })
        break;
      default:
        break;
    }
  }
  /* 取消弹窗 */
  cancelAction = () => {
    this.setState({
      popContent: {
        showPop: false,
        popTitle: '',
        popArr: [],
        popValue: '',
      }
    })
  }
  /* 确认选择 */
  confirmAction = () => {
    console.log()
  }
  /* 选择值 */
  valueAction = (value) => {
    console.log(value)
  }
  render() {
    let state = this.state;
    return (
      <div className="App">
        <Header title="发布需求" leftIcon='angle-left' leftIconAction={() => { returnBack(this.props) }} />
        <section className="contain" style={{ backgroundColor: '#f4f4f4' }}>
          <section className="push-require">
            <ListInput required={true} leftTitle="标题" placeholder="请输入标题" />
            <ListInput required={true} disabled={true} leftTitle="地区" placeholder="请选择地区" onClick={() => { this.showSelect('addr') }} />
            <ListInput required={true} leftTitle="联系方式" placeholder="请输入联系方式" />
            <ListInput required={true} disabled={true} leftTitle="细分领域" placeholder="请选择细分领域" />
            <ListInput required={true} disabled={true} leftTitle="合作方式" placeholder="请选择合作方式" />
            <ListInput disabled={true} leftTitle="有效时间" placeholder="请选择有效时间" />
            <ListTextArea title="技术/产品简介" placeholder="请输入您的详细需求" totalFont={100} onChange={() => { }} />
            <ListTextArea title="特点/优势" placeholder="请输入特点/优势" totalFont={100} onChange={() => { }} />
            <ListTextArea title="已有案例" placeholder="请输入已有案例描述" totalFont={100} onChange={() => { }} />
            <div className="upload-img">
              <p>上传图片</p>
              <div className="flex flex-ai-c">
                <div className="add"></div>
                <div>
                  <img alt="" src={require('../../images/releaseRequire/bg2.png')} />
                  <i className="delete"></i>
                </div>
                <div>
                  <img alt="" src={require('../../images/releaseRequire/bg2.png')} />
                  <i className="delete"></i>
                </div>
                <div>
                  <img alt="" src={require('../../images/releaseRequire/bg2.png')} />
                  <i className="delete"></i>
                </div>
              </div>
            </div>
            <SubmitBotton title="发布需求" submitButtonSty='mt-140' onPressAction={() => { this.submit() }} />
          </section>
        </section>
        <PcSelect title={state.popContent.popTitle} show={state.popContent.showPop} arr={state.popContent.popArr}
          cancelAction={() => { this.cancelAction() }}
          confirmAction={() => { this.confirmAction() }}
          valueAction={(value) => { this.valueAction(value) }}
        />
      </div>
    );
  }
}
export default PushRequire;
