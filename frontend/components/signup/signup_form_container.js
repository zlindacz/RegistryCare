import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { receiveInProgressUser } from '../../actions/user_actions';
import SignupForm from './signup_form';

const mapStateToProps = state => ({
  signedUp: Boolean(state.session.currentUser),
  user: state.user,
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  receiveInProgressUser: (user) => dispatch(receiveInProgressUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
