import React, { Component } from 'react';
import sun from '../images/sun.png';

class Header extends Component {
  render() {
    return (
        <header className="App__header">
          <img src={sun} className="App__logo" alt="logo" />
          <div>Enter a City and Country to Display the Current Weather</div>
        </header>
    );
  }
}

export default Header;
