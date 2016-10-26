import { connect } from 'react-redux';
import { requestSingleUser } from '../../../actions/user_actions';
import UserRegistry from './user_registry_component';
// import { createPledge, removePledge } from '../../../actions/pledge_actions';

const findId = (users, id) => {
  return users.filter(user => (user.id == id));
}

const mapStateToProps = (state, { params }) => {
  const user = findId(state.user.users, params.userId);
  return { user: user[0] }
};

const mapDispatchToProps = dispatch => ({
  requestSingleUser: (id) => dispatch(requestSingleUser(id))
  // createPledge: (id) => dispatch(createPledge(id)),
  // removePledge: (id) => dispatch(removePledge(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserRegistry);
