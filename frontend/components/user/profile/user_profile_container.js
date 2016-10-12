import { connect } from 'react-redux';
import { updateUser } from '../../../actions/user_actions';
import UserProfile from './user_profile';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.registry.errors
});

const mapDispatchToProps = dispatch => ({
  updateUser: (user) => dispatch(updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
