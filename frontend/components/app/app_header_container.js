import { connect } from 'react-redux';
import AppHeader from './app_header';
import { logout, login } from '../../actions/session_actions';
import { clearUserInfo } from '../../actions/user_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  guestLogin: () => dispatch(login({
    username: "treehouse",
    password: "password"
  })),
  clearUserInfo: () => dispatch(clearUserInfo()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeader);
