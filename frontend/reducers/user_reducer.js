import { UserConstants } from '../actions/user_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  let user;
  switch(action.type) {
    case (UserConstants.RECEIVE_IN_PROGRESS_USER ||
          UserConstants.RECEIVE_SINGLE_USER):
      user = action.user;
      return merge({}, state, user);
    case UserConstants.RECEIVE_USERS:
      users = action.users;
      return merge({}, state, users);
    case UserConstants.UPDATE_USER:
      user = action.user;
      return merge({}, state, user);
    default:
      return state;
  }
};
