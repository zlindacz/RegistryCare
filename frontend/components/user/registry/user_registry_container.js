import { connect } from 'react-redux';
import { updateUser } from '../../../actions/user_actions';
import UserRegistry from './user_registry_component';

const mapStateToProps = state => ({
  currentUser: this.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  updateUser: (user) => dispatch(updateUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserRegistry);
