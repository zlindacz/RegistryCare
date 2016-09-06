import { connect } from 'react-redux';
import * as PledgeActions from '../../../actions/pledge_actions';
import UserPledges from './user_pledges';

const mapStateToProps = state => ({
  pledges: this.session.currentUser.pledges // array of pledges, just need ids to render
});

const mapDispatchToProps = dispatch => ({
  requestPledges: () => dispatch(requestPledges()),
  requestPledge: () => dispatch(requestPledge())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPledges);
