import React from 'react';
import { withRouter } from 'react-router';

class AppFooter extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <footer className="row footer-nav">
        <div className="col-12 footer-cap">
        </div>
      </footer>
    );
  }
}

export default withRouter(AppFooter);
