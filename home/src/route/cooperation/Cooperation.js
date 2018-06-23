import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
class Cooperation extends Component {
  render() {
    return (
      <div className="App">
        <Header title="找合作" />
        <section className="contain">找合作</section>
        <Footer active={1} />
      </div>
    );
  }
}
export default Cooperation;
