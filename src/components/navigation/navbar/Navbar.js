import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../../../constants/routes';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <ul>
          <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
          <li><Link to={routes.SIGN_UP}>Sign Up</Link></li>
          <li><Link to={routes.FEED}>Blog</Link></li>
          <li><Link to={routes.ACCOUNT}>Account</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
