import { connect } from 'react-redux';
import { requestUsers, requestSingleUser } from '../../../actions/user_actions';
import UserIndex from './user_index_component';
// import UserRegistry from './user_registry_component';

const mapStateToProps = state => ({
  users: state.user.users,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestUsers: () => dispatch(requestUsers())
  // requestSingleUser: (user) => dispatch(requestSingleUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserIndex);
