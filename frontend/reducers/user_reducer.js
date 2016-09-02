import { UserConstants } from '../actions/user_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  switch(action.type) {
    case (UserConstants.RECEIVE_IN_PROGRESS_USER ||
          UserConstants.RECEIVE_SINGLE_USER):
      const user = action.user;
      return merge({}, user);
    case UserConstants.RECEIVE_USERS:
      const users = action.users;
      return merge({}, users);
    default:
      return state;
  }
};
