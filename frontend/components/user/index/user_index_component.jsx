import React from 'react';
import { withRouter } from 'react-router';
import MiniProfile from './user_mini_profile_component';
// import UserHeader from './user_header_component';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 0
};

const style = {
  backgroundColor: 'rgb(249, 246, 248)'
};

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
      <Masonry className="masonry"
               style={style}
               onClick={this.handleClick}
               >
        <h1 className="index-tagline">{this.props.currentUser.organization_name}</h1>       
        <div>
          <h1 className="index-title">All Organizations</h1>
          <div className="organizations">
            {miniProfiles}
          </div>
        </div>
      </Masonry>
    )
  }
};

export default withRouter(UserIndex);
// still need router here if it's MiniProfile's role to redirect?
