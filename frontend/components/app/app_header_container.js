import { connect } from 'react-redux';
import AppHeader from './app_header';
import { logout } from '../../actions/session_actions';
import { editUser } from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
//  updateUser: (user) => dispatch(updateUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeader);
