import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {
  render() {
    return (
      <div className="Logo">
        <h1>smok<span>fyz</span></h1>
        <h2><span>{"developer's"}</span> blog</h2>
      </div>
    );
  }
}

export default Logo;
