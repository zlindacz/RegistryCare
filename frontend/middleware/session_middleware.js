import { receiveCurrentUser, receiveErrors, SessionConstants } from '../actions/session_actions';
import { clearUserInfo } from '../actions/user_actions.js';
import { login, logout, signup } from '../util/session_api_util';

export default ({getState, dispatch}) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
    console.log(errors);
  };

  switch(action.type) {
    case SessionConstants.LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case SessionConstants.SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    case SessionConstants.LOGOUT:
      logout(dispatch(clearUserInfo()), errorCallback);
      return next(action);
    default:
      return next(action);
  }
}
