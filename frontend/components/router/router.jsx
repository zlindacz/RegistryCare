import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../app';
import SignupFormContainer from '../signup/signup_form_container';
import UserIndexContainer from '../user/index/user_index_container';
import UserPledgesContainer from '../user/pledge/user_pledges_container';
import UserRegistryContainer from '../user/registry/user_registry_container';
import HomeContainer from '../home/home_container';

class AppRouter extends React.Component{
  constructor(props) {
    super(props);

    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
  }

  _redirectIfLoggedIn(nextState, replace) {
    const currentUser = this.props.currentUser;
    if (nextState.currentUser && !currentUser) {
      replace('/index');
    }
  }

  _ensureLoggedIn(nextState, replace) {
    const currentUser = this.props.currentUser
    if (!nextState.currentUser || !currentUser) {
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
          <Route path="/pledges" component={ UserPledgesContainer} onEnter={ this._ensureLoggedIn } />
        </Route>
      </Router>
    );
  }
}


export default AppRouter;
