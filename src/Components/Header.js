import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
        <header className="App__header">
          <img src={this.props.src} className="App__logo" alt="logo" />
          <div>Enter a City and Country to Display the Current Weather</div>
        </header>
    );
  }
}

export default Header;
