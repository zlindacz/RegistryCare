import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import AppHeaderContainer from './app/app_header_container';
import { receiveCurrentUser } from '../actions/session_actions'


const AppRouter = () => {
  return(
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
      </Route>
    </Router>
  )
}

export default AppRouter;
