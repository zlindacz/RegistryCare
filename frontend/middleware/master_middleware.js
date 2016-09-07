import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import UserMiddleware from './user_middleware';
import createLogger from 'redux-logger';
const loggerMiddleware = createLogger();

const MasterMiddleware = applyMiddleware(
  SessionMiddleware,
  UserMiddleware,
  loggerMiddleware
);

export default MasterMiddleware;
