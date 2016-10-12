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
      let newState =  merge({}, state)
      newState.users = action.users
      return newState
    case UserConstants.RECEIVE_USER_ERRORS:
      const errors = action.errors;
      return merge({}, state, {errors})
    case UserConstants.CLEAR_USER_INFO:
      return defaultState; 
    default:
      return state;
  }
};
