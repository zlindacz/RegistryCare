import { connect } from 'react-redux';
import UserShow from './user_show';

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  requestUsers: () => dispatch(requestUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
