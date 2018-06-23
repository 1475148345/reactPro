import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { apiConfig } from '../lib/config';
import { myAction } from '../redux/action/action';
import { connect } from 'react-redux'
import { http } from '../lib/util';
/* 首页 */
import Home from './home/Home';//首页
/* 找合作 */
import Cooperation from './cooperation/Cooperation';//找合作
/* 发布 */
import ReleaseRequire from './releaseRequire/ReleaseRequire';//发布首页
import PushRequire from './releaseRequire/PushRequire';//发布需求
import Find from './find/Find';//发现
/* 我的 */
import My from './my/My';//我的
import MyInfo from './my/MyInfo';//个人资料
import UpdateSex from './my/UpdateSex';//修改性别
import UpdateNickName from './my/UpdateNickName';//修改姓名
import UpdateCompany from './my/UpdateCompany';//修改企业
import UpdateJob from './my/UpdateJob';//修改企业
import UpdatePhone from './my/UpdatePhone';//绑定电话
import ChangePhone from './my/ChangePhone';//修改电话
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ad: true,
      gif: require('../images/234.gif')
    }
  }
  componentDidMount() {
    var that = this;
    let path = this.props.location.pathname;
    /* 获取个人资料 */
    http(apiConfig.getMyInfo + '?id=1').then(function (res) {
      that.props.dispatch(myAction('myInfo', res.data[0]))
    });
    /* 获取城市数据 */
    http(apiConfig.getCity,'','post').then(function (res) {
      that.props.dispatch(myAction('cityList', res.data))
    });
    if (path!=='/') {
      that.setState({ gif: require('../images/loading.gif') });
      setTimeout(function () {
        that.setState({ ad: false });
        that.props.history.push(path);//跳转到当前路由
      },500)
    } else {
      setTimeout(function () {
        that.setState({ ad: false });
        that.props.history.push('/');//跳转到首页
      }, 1000)
    }
  }
  render() {
    return (
      <div>
        {
          this.state.ad ?
            <img src={this.state.gif} alt="" style={{ width: '100%', height: '100vh' }} />
            :
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/cooperation' component={Cooperation} />
              {/* 发布 */}
              <Route exact path='/releaseRequire' component={ReleaseRequire} />
              <Route exact path='/releaseRequire/pushRequire' component={PushRequire} />
              <Route exact path='/find' component={Find} />
              {/* 我的 */}
              <Route exact path='/my' component={My} />
              <Route path='/my/myInfo' component={MyInfo} />
              <Route path='/my/updateSex' component={UpdateSex} />
              <Route path='/my/updateNickName' component={UpdateNickName} />
              <Route path='/my/updateCompany' component={UpdateCompany} />
              <Route path='/my/updateJob' component={UpdateJob} />
              <Route path='/my/updatePhone' component={UpdatePhone} />
              <Route path='/my/changePhone' component={ChangePhone} />
            </Switch>
        }
      </div>
    );
  }
}
export default withRouter(connect()(Main));;
