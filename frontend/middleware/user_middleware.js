import { receiveUsers, receiveSingleUser, receiveErrors, UserConstants } from '../actions/user_actions';
import { fetchAllUsers, fetchSingleUser, patchUser } from '../util/user_api_util.js';
import { PledgeConstants } from '../actions/pledge_actions';
import { pledge, unpledge } from '../util/pledge_api_util';

export default ({getState, dispatch}) => next => action => {
  const errorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveErrors(errors));
    console.log(errors);
  }

  const receiveUsersSuccessCallback = (users) => dispatch(receiveUsers(users));
  const receiveSingleUserSuccessCallback = user => dispatch(receiveSingleUser(user));
  const updateUserSuccessCallback = user => dispatch(updateUser(user));


  switch(action.type) {
    case UserConstants.REQUEST_USERS:
      fetchAllUsers(receiveUsersSuccessCallback, errorCallback);
      return next(action);
    case UserConstants.REQUEST_SINGLE_USER:
      fetchSingleUser(action.id, receiveSingleUserSuccessCallback, errorCallback);
      return next(action);
    case UserConstants.UPDATE_USER:
      updateUser(updateUserSuccessCallback, errorCallback);
      return next(action);
    case PledgeConstants.CREATE_PLEDGE:
      pledge(action.other_user_id, receiveSingleUserSuccessCallback, errorCallback);
      return next(action);
    case PledgeConstants.REMOVE_PLEDGE:
      unpledge(action.other_user_id, receiveSingleUserSuccessCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
}
