import { connect } from 'react-redux';
import { requestUsers, requestSingleUser, updateUser } from '../../actions/user_actions';
import UserRegistry from './user_registry_component';
// import Pledge from '../pledge/pledge'

const mapStateToProps = state => ({
  users: state.users,
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestUsers: () => dispatch(requestUsers()),
  requestSingleUser: (user) => dispatch(requestSingleUser()),
  updateUser: (currentUser) => dispatch(updateUser())
  // request pledges
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( UserRegistry );
