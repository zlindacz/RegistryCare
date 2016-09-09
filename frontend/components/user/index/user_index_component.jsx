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
      <Masonry className="masonry"
               style={style}
               onClick={this.handleClick}
               >
        <h1 className="tagline">{this.props.currentUser.organization_name}</h1>
        <div>
          <h1 className="index-title">All Organizations</h1>
          <div className="organizations">
            {miniProfiles}
          </div>
        </div>
      </Masonry>
    );
  }
};

export default withRouter(UserIndex);
