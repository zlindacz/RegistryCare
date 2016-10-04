import { connect } from 'react-redux';
import { requestUsers } from '../../../actions/user_actions';
import UserIndex from './user_index_component';

const mapStateToProps = state => ({
  users: state.user.users,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestUsers: () => dispatch(requestUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserIndex);
