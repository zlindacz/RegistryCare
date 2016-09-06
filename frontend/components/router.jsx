import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SignupFormContainer from './signup/signup_form_container';
import UserRegistryContainer from './user/user_registry_container';

const _redirectIfLoggedIn = () => {

}

const _ensureLoggedIn = () => {

}

const AppRouter = () => {
  return(
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        {/* <IndexRoute component={homepage} */}
        <Route path="/signup" component={ SignupFormContainer } onEnter={ _redirectIfLoggedIn }/>
        <Route path="/registry" component={ UserRegistryContainer } onEnter={ _ensureLoggedIn }/>
      </Route>
    </Router>
  )
}

export default AppRouter;
