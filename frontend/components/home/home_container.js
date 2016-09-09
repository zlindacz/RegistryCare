import { connect } from 'react-redux';
import Home from './home_component';
import { login } from '../../actions/user_actions';

const mapStateToProps = state => ({
  guestUser: state.users.first
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  guestLogin: () => dispatch(login(guestUser))
});

export default connect(
)(Home);
