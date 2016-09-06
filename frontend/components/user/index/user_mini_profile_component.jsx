import React from 'react';
import { withRouter } from 'react-router';

class MiniProfile extends React.Component {

  render() {
    let user = this.props.user;

    return(
      <div>
        <figure>
          <img src={this.props.user.photo} className="mini-photo"/>
        </figure>

        {this.props.user.username}
      </div>
    )
  }
}

export default withRouter(MiniProfile);
