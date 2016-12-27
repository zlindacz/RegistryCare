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
    const photoUrl = this.props.user.photo
    const myRegex = /(^.*upload\/)(.*?$)/g;
    var matched = myRegex.exec(photoUrl);
    var firstMatch = matched[1];
    var lastMatch = matched[2];
    var quality250w = "f_auto,q_72,w_250/";
    var quality600w = "f_auto,q_72,w_600/";
    var quality1500w = "f_auto,q_72,w_1500/";

    return(
      <div className="mini-organization" onClick={this.navigateToRegistry}>
        <figure className="mini-photo-container">
          <img className="mini-photo"
               src={firstMatch + quality250w + lastMatch}
               srcSet={firstMatch + quality600w + lastMatch + ' 600w',
                       firstMatch + quality1500w + lastMatch + ' 1500w'}
               alt="profile picture"
               sizes="(max-width: 250px) 90vw, 40vw"/>
          <h3>{this.user.organization_name}</h3>
        </figure>
      </div>
    );
  }
}

export default withRouter(MiniProfile);
