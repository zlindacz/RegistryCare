import React from 'react';
import { withRouter } from 'react-router';

class MiniProfile extends React.Component {
  constructor(props) {
    super(props);
    this.user = this.props.user;

    this.navigateToRegistry = this.navigateToRegistry.bind(this);
  }

  navigateToRegistry() {
    this.props.router.push(`registry/${this.user.id}`);
  }

  render() {
    return(
      <div className="mini-organization" onClick={this.navigateToRegistry}>
        <figure className="mini-photo-container">
          <img className="mini-photo" src={this.user.photo} />
          <h3>{this.user.organization_name}</h3>
        </figure>
      </div>
    );
  }
}

export default withRouter(MiniProfile);
