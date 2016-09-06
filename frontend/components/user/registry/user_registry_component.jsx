import React from 'react';
import { withRouter } from 'react-router';
// import UserHeader from './user_header_component';

class UserRegistry extends React.Component {
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
            <MiniProfile key={user.id} className="mini-profile" />
          })}
        </ul>
      </div>
    )
  }
};

export default withRouter(UserRegistry);
