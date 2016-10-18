import { UserConstants } from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  user: null,
  errors: []
});

export default (state = {}, action) => {
  let user = action.user;
  switch(action.type) {
    case UserConstants.RECEIVE_SINGLE_USER:
      // debugger
      console.log(merge({}, state, {user}));
      // return Object.assign({}, state, {user});
      return merge({}, state, {user});
    case UserConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, {errors})
    default:
      return state;
  }
};
