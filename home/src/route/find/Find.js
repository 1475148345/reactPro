import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
class Find extends Component {
  render() {
    return (
      <div className="App">
        <Header title="发现" />
        <section className="contain">发现</section>
        <Footer active={3} />
      </div>
    );
  }
}
export default Find;
