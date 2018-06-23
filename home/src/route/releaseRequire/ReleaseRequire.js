import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
class ReleaseRequire extends Component {
  constructor(props){
    super(props);
    this.state={
      listArr:[
        {img:'icon1',title:'技术/产品供需',nav:'/releaseRequire/pushRequire'},
        {img:'icon2',title:'项目合作',nav:''},
        {img:'icon3',title:'投/融资项目',nav:''},
        {img:'icon4',title:'龙头企业整合',nav:''},
        {img:'icon5',title:'环保创业',nav:''},
        {img:'icon6',title:'产学研合作',nav:''},
        {img:'icon7',title:'人才供需',nav:''},
        {img:'icon8',title:'发布活动',nav:''},
      ]
    }
  }
  navigate=(type)=>{
    this.props.history.push(type);
  }
  render() {
    return (
      <div className="App">
        <Header title="发布" />
        <section className="contain">
          <i className="release-bg"></i>
          <section className="release-require">
            <nav className="flex flex-ai-c">
              {
                this.state.listArr.map((v,i)=>{
                  return(
                    <span key={i} onClick={()=>{this.navigate(v.nav)}}><i className={v.img}></i>{v.title}</span>
                  )
                })
              }
            </nav>
            <i className="cancel-icon" onClick={()=>{this.navigate('/')}}></i>
          </section>
        </section>
        <Footer active={2} />
      </div>
    );
  }
}
export default ReleaseRequire;
