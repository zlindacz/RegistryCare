import React from 'react';
import { withRouter } from 'react-router';
import MiniProfile from './user_mini_profile_component';
// import UserHeader from './user_header_component';

class UserIndex extends React.Component {
  componentDidMount(){
    this.props.requestUsers();
  }

  render(){
    const { users, currentUser } = this.props;
    const miniProfiles = users.map(user => {
      if (currentUser && (user.id === currentUser.id)) {
        return;
      } else {
        return <MiniProfile key={user.id} user={user} />;
      }
    });

    return(
      <div>
        <h1 className="index-title">All Organizations</h1>
        <div className="organizations">
          {miniProfiles}
        </div>
      </div>
    )
  }
};

export default withRouter(UserIndex);
// still need router here if it's MiniProfile's role to redirect?
