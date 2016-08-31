import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';

export const Root({store}) {
  <Provider store={store}>
    <Router history={hashHistory}>
      
    </Router>
  </Provider>
}
