import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {signup} from './util/session_api_util';
import {login} from './util/session_api_util';
import {logout} from './util/session_api_util';
import {receiveCurrentUser} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.receiveCurrentUser = receiveCurrentUser;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
