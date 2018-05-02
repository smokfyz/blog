import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './Blog.css';
import Nav from './navigation/Nav';
import Feed from './feed/Feed';
import SignIn from './auth/signin/SignIn';
import SignUp from './auth/signup/SignUp';
import Account from './auth/account/Account';

import * as routes from '../constants/routes';

class Blog extends Component {
  render() {
    return (
      <Router>
        <div className="Blog">
          <Nav />

          <Route
            exact path={routes.FEED}
            component={() => <Feed />}
          />
          <Route
            exact path={routes.SIGN_UP}
            component={() => <SignUp />}
          />
          <Route
            exact path={routes.SIGN_IN}
            component={() => <SignIn />}
          />
          <Route
            exact path={routes.ACCOUNT}
            component={() => <Account />}
          />
        </div>
      </Router>
    );
  }
}

export default Blog;
