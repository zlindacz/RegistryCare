import { UserConstants } from '../actions/user_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  switch(action.type) {
    case UserConstants.RECEIVE_IN_PROGRESS_USER:
      const user = action.user;
      return merge({}, user);
    default:
      return state;
  }
};
