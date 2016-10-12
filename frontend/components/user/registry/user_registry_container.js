import { connect } from 'react-redux';
import { requestSingleUser } from '../../../actions/user_actions';
import UserRegistry from './user_registry_component';
// import { createPledge, removePledge } from '../../../actions/pledge_actions';

const mapStateToProps = state => ({
  user: state.registry.user,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestSingleUser: (id) => dispatch(requestSingleUser(id))
  // createPledge: (id) => dispatch(createPledge(id)),
  // removePledge: (id) => dispatch(removePledge(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserRegistry);
