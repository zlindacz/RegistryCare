import { UserConstants } from '../actions/user_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  switch(action.type) {
    case (UserConstants.RECEIVE_IN_PROGRESS_USER ||
          UserConstants.RECEIVE_SINGLE_USER):
      const user = action.user;
      return merge({}, state, user);
    case UserConstants.RECEIVE_USERS:
      const users = action.users;
      return merge({}, state, users);
    default:
      return state;
  }
};
