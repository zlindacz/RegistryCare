import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
// import UserMiddleware from './user_middleware';

const MasterMiddleware = applyMiddleware(
  // UserMiddleware,
  SessionMiddleware
);

export default MasterMiddleware;