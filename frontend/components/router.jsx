import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SignupForm from './signup/signup_form';

const AppRouter = () => {
  return(
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <Route path="/signup" component={ SignupForm } />
      </Route>
    </Router>
  )
}

export default AppRouter;
