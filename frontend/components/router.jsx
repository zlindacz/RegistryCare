import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SignupFormContainer from './signup/signup_form_container';

const AppRouter = () => {
  return(
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <Route path="/signup" component={ SignupFormContainer } />
      </Route>
    </Router>
  )
}

export default AppRouter;
