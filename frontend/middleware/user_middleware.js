import logger from 'redux-logger';

import { receiveUsers, receiveSingleUser, updateUser,
         receiveErrors, UserConstants } from '../actions/user_actions.js';
import { fetchAllUsers, fetchSingleUser, patchUser } from '../util/user_api_util.js';

export default ({getState, dispatch}) => next => action => {
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
    console.log(errors);
  }

  const receiveUsersSuccessCallback = () => dispatch(receiveUsers);
  const receiveSingleUserSuccessCallback = user => dispatch(receiveSingleUser(user));
  const updateUserSuccessCallback = user => dispatch(updateUser(user));

  switch(action.type) {
    case UserConstants.RECEIVE_USERS:
      fetchAllUsers(receiveUsersSuccessCallback, errorCallback);
      return next(action);
      logger
    case UserConstants.RECEIVE_SINGLE_USER:
      fetchSingleUser(receiveSingleUserSuccessCallback, errorCallback);
      return next(action);
      logger
    case UserConstants.UPDATE_USER:
      updateUser(updateUserSuccessCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
}
