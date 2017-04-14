import React from 'react';
import { withRouter } from 'react-router';
import MiniProfile from './user_mini_profile_component';
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

    const results = (scope) => {
      if (scope.users.length === 0) {
        return "No matches found.";
      }
    };

    return(
      <div className="index-parent">
        <h1 className="tagline">All Organizations</h1>
        <div className="organizations">
          <h1 className="no-matches">{results(this.props)}</h1>
          <Masonry className="masonry">
            {miniProfiles}
          </Masonry>
        </div>
      </div>
    );
  }
};

export default withRouter(UserIndex);
