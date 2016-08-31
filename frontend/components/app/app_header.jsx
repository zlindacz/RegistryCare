import React from 'react';

class AppHeader extends React.Component {
  notLoggedIn() {
    return(
      <div>
        <ul className="header-list group">
          <li><a>About</a></li>
          <li><a>Log In</a></li>
          <li><a>Sign Up</a></li>
        </ul>
      </div>
    );
  }

  loggedIn() {
    return(
      <div>
        <ul className="header-list group">
          <li><a><a>About</a></a></li>
          <li><a><a>Log Out</a></a></li>
        </ul>
      </div>
    );
  }

  render() {
    return(
      <header className="header-nav">
        <img src="assets/heart.png" className="logo"/>
        { this.props.currentUser ? this.loggedIn() : this.notLoggedIn() }
      </header>
    );
  }
}

export default AppHeader;
