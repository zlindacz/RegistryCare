import { connect } from 'react-redux';
import SearchBar from './search';
import { requestUsers } from '../../actions/user_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  users: state.user.users
});

const mapDispatchToProps = dispatch => ({
  submitQuery: query => dispatch(requestUsers(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
