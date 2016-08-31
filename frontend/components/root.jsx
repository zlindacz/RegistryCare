import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

import AppHeaderContainer from './app/AppHeaderContainer';
// import UserShowContainer from './users/UserShowContainer';
import { receiveCurrentUser } from '../actions/session_actions'

const Root({store}) {
  const RequestCurrentUserShowOnEnter = () => {
    store.dispatch(receiveCurrentUser());
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={AppHeaderContainer} onEnter={RequestCurrentUserShowOnEnter}>

        </Route>
      </Router>
    </Provider>
  )
}

export default Root;
