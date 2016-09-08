import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import RegistryReducer from './registry_reducer';

export default combineReducers({
  user: UserReducer,
  session: SessionReducer,
  registry: RegistryReducer
});
