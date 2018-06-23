import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
            <header className="flex flex-ai-c flex-jc-sb">
                <div className="l" onClick={this.props.leftIconAction}>
                    <i className={this.props.leftIcon}></i>
                </div>
                <h1>{this.props.title}</h1>
                <div className="r"></div>
            </header>
        );
    }
}
export default Header;
