import React, { Component } from 'react';
import Logo from './logo/Logo';
import Navbar from './navbar/Navbar';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <Logo />
        <Navbar />
      </div>
    );
  }
}

export default Nav;
