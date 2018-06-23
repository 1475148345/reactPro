import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { changeNavStatus } from '../lib/util'
class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [
                { img: 'icon1', text: '首页', active: true, nav: '/' },
                { img: 'icon2', text: '找合作', active: false, nav: '/cooperation' },
                { img: 'icon3', text: '发布', active: false, nav: '/releaseRequire' },
                { img: 'icon4', text: '发现', active: false, nav: '/find' },
                { img: 'icon5', text: '我的', active: false, nav: '/my' },
            ]
        }
    }
    /* 改变底部状态 */
    componentWillMount(){
        var newArr = changeNavStatus(this.state.arr, this.props.active);
        this.setState({ arr: newArr });
    }
    render() {
        return (
            <footer className="flex flex-ai-c flex-jc-sb">
                {
                    this.state.arr.map((v, i) => {
                        return (
                           <Link to={v.nav} key={i}> <div  className={v.active ? 'active' : ''}><i className={v.img}></i>{v.text}</div></Link>
                        )
                    })
                }
            </footer>
        );
    }
}
export default Footer;
