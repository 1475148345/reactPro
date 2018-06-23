import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header title="首页" />
        <section className="contain">首页</section>
        <Footer active={0} />
      </div>
    );
  }
}
export default Home;
