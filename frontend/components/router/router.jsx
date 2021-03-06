import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app';
import SignupFormContainer from '../signup/signup_form_container';
import UserIndexContainer from '../user/index/user_index_container';
import UserRegistryContainer from '../user/registry/user_registry_container';
import HomeContainer from '../home/home_container';
import ProfileContainer from '../user/profile/user_profile_container';

class AppRouter extends React.Component{
  constructor(props) {
    super(props);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
  }

  _redirectIfLoggedIn(nextState, replace) {
    const currentUser = this.context.store.getState().session.currentUser;
    if (currentUser) {
      replace(`/index`);
    }
  }

  _ensureLoggedIn(nextState, replace) {
    const currentUser = this.context.store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  }

  render() {
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ HomeContainer } onEnter={ this._redirectIfLoggedIn } />
          <Route path="/index" component={ UserIndexContainer } onEnter={ this._ensureLoggedIn } />
          <Route path="/signup" component={ SignupFormContainer } onEnter={ this._redirectIfLoggedIn }/>
          <Route path="/registry/:userId" component={ UserRegistryContainer } onEnter={ this._ensureLoggedIn } />
          <Route path="/profile" component={ ProfileContainer} />
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object
}
export default AppRouter;
