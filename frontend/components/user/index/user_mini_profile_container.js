import { connect } from 'react-redux';
import { requestSingleUser } from '../../actions/user_actions';
import { createPledge, removePledge } from '../../actions/pledge_actions';

const mapStateToProps = state => ({
  users: state.users,
  currentUser: this.session.currentUser
});

// const mapDispatchToProps = dispatch => ({
//   createPledge: () => dispatch(createPledge()),
//   removePledge: (pledge) => dispatch(removePledge())
// });

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(UserMiniProfile);
