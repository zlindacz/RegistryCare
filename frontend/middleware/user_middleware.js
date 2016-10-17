import { receiveUsers, receiveSingleUser, receiveErrors, UserConstants } from '../actions/user_actions';
import { fetchAllUsers, fetchSingleUser, patchUser } from '../util/user_api_util.js';
import { receiveCurrentUser } from '../actions/session_actions';

export default ({getState, dispatch}) => next => action => {
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
    console.log(errors);
  }

  const receiveUsersSuccessCallback = users => dispatch(receiveUsers(users));
  const receiveSingleUserSuccessCallback = user => dispatch(receiveSingleUser(user));
  const updateUserSuccessCallback = user => dispatch(receiveCurrentUser(user));


  switch(action.type) {
    case UserConstants.REQUEST_USERS:
      fetchAllUsers(receiveUsersSuccessCallback, errorCallback, action.query);
      return next(action);
    case UserConstants.REQUEST_SINGLE_USER:
      fetchSingleUser(action.id, receiveSingleUserSuccessCallback, errorCallback);
      return next(action);
    case UserConstants.UPDATE_USER:
      patchUser(action.user, updateUserSuccessCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
}
