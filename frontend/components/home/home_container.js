import { connect } from 'react-redux';
import Home from './home_component';
import { login } from '../../actions/session_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  guestLogin: () => dispatch(login({
    username: "treehouse",
    password: "password"
  }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
