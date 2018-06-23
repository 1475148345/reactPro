import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { changeNavStatus } from '../../lib/util';
import { Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { ListButton, SubmitBotton } from '../../components/Base';
import PropTypes from 'prop-types';
class My extends Component {
  static contextTypes = {
      store: PropTypes.object,
  };
  constructor(props) {
    super(props)
    this.state = {
      // 列表
      listArr: [
        { title: '个人资料', icon: 'icon1', nav: '/my/myInfo', active: false },
        { title: '我的需求', icon: 'icon2', nav: '', active: false },
        { title: '需求配对', icon: 'icon3', nav: '', active: false },
        { title: '我的收藏', icon: 'icon4', nav: '', active: false },
        { title: '最近浏览', icon: 'icon5', nav: '', active: false },
        { title: '谁看过我', icon: 'icon6', nav: '', active: false },
      ],
      myInfo:{}
    }
  }
  componentDidMount(){
      this.setState({myInfo:this.context.store.getState().myInfo});
  }
  /* 页面跳转 */
  goDetails(index) {
    //动画
    var newArr = changeNavStatus(this.state.listArr, index);
    this.setState({ listArr: newArr });
  }
  render() {
    let myInfo=this.state.myInfo;
    return (
      <div className="App">
        <Header title="我的" />
        <section className="contain">
          {/* 头部 start*/}
          <section className="my">
            <div className="bg"></div>
            <div className="avatar">
              <div>
                <img alt="" src={require('../../images/my/avatar.jpg')} />
                <i className={myInfo.sex===1?'man-icon':'woman-icon'}></i>
              </div>
              <p>{myInfo.nickName}</p>
              <span>季度套餐</span>
            </div>
          </section>
          {/* 头部 end*/}
          {/* 列表 start*/}
          {
            this.state.listArr.map((v, k) => {
              return (
                <Link to={v.nav}  key={k}>
                  <ListButton animate={v.active} centerTitle={v.title} leftIcon={v.icon} onPressAction={() => this.goDetails(v, k)} />
                </Link>
              )
            })
          }
          {/* 列表 end*/}
          {/* 提交按钮 start */}
          <SubmitBotton title="退出登录" />
          {/* 提交按钮 end */}
        </section>
        <Footer active={4} />
      </div>
    );
  }
}
export default connect()(My);
