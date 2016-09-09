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
    const miniProfiles = this.props.users.map(user => {
      return <MiniProfile key={user.id} user={user} />
    });


    return(
      <div className="index-parent">
        <h1 className="tagline">All Organizations</h1>
        <div className="organizations">
        <Masonry className="masonry">
          {miniProfiles}
        </Masonry>
        </div>
      </div>
    );
  }
};

export default withRouter(UserIndex);
