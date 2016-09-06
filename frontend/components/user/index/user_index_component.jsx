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
    return(
      <div>
        <h1 className="index-title">All Organizations</h1>
        <ul className="organizations">
          {users.map(user => {
            if (user.id === currentUser.id) {
              return;
            } else {
              return <MiniProfile key={user.id} user={user} className="mini-profile" />;
            }
          })}
        </ul>
      </div>
    )
  }
};

export default withRouter(UserIndex);
// still need router here if it's MiniProfile's role to redirect?
