import React from 'react';
import { withRouter } from 'react-router';

class AppFooter extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <footer className="footer-nav">

        <div className="footer-cap">
        </div>
      </footer>
    );
  }
}

export default withRouter(AppFooter);
