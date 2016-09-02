import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';

export default combineReducers({
  user: UserReducer,
  session: SessionReducer
});
