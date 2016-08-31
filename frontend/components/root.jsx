import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

import GreetingContainer from './greeting/GreetingContainer';
// import UserShowContainer from './users/UserShowContainer';

export const Root({store}) {
  <Provider store={store}>
    <Router history={hashHistory}>
      {}
    </Router>
  </Provider>
}
