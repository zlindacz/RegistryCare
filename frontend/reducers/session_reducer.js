import { SessionConstants } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

export default (state = _nullUser, action) => {
  switch(action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      // debugger
      return merge({}, _nullUser, {currentUser});
    case SessionConstants.RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {errors});
    case SessionConstants.LOGOUT:
      return merge({}, _nullUser);
    case SessionConstants.CLEAR_ERRORS:
      return merge({}, {currentUser: state.currentUser}, {errors: []});
    default:
      return state;
  }
};
