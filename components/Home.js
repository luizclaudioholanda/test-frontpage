import React, { Component } from 'react';

import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import MainPage from './MainPage';
import Docs from './Docs';
import ErrorPage from './ErrorPage';
import TroubleShootingPage from './TroubleShootingPage';

class Home extends Component {
  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path='/' component={MainPage} />
          <Route path='/Docs' component={Docs} />
          <Route path='/ErrorPage' component={ErrorPage} />
          <Route path='/TroubleShootingPage' component={TroubleShootingPage} />
        </Router>

      </div>
    );
  }
}

export default Home;
