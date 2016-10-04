import { connect } from 'react-redux';
import AppHeader from './app_header';
import { logout, login } from '../../actions/session_actions';
import { editUser } from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  guestLogin: () => dispatch(login({
    username: "treehouse",
    password: "password"
  })),
 editUser: (user) => dispatch(editUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeader);
