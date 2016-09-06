import { connect } from 'react-redux';
import { requestUsers, requestSingleUser, updateUser } from '../../../actions/user_actions';
import UserIndex from './user_index_component';
// import UserRegistry from './user_registry_component';

const mapStateToProps = state => ({
  users: state.users,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestUsers: (users) => dispatch(requestUsers(users)),
  requestSingleUser: (user) => dispatch(requestSingleUser(user)),
  requestPledges: () => dispatch(requestPledges()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserIndex);
