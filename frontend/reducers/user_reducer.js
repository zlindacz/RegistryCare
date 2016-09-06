import { UserConstants } from '../actions/user_actions';
import merge from 'lodash/merge';

const defaultState = {
  inProgressUser: {},
  users: []
};

export default (state = defaultState, action) => {
  let user;
  switch(action.type) {
    case UserConstants.RECEIVE_IN_PROGRESS_USER:
      user = action.user;
      return merge({}, state, {inProgressUser: user});
    case UserConstants.RECEIVE_USERS:
      let users = action.users;
      return merge({}, state, {users: users});
    case UserConstants.UPDATE_USER:
      user = action.user;
      return merge({}, state, user);
    default:
      return state;
  }
};
