import React from 'react';
import AppHeader from './app/app_header_container';
import AppFooter from './app/app_footer_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="app row">
        <div className="col-12">
          <div className="background-image-top"><AppHeader /></div>
        </div>
        <div className="col-12">
          {this.props.children}
        </div>
        <div className="col-12">
          <div className="background-image-foot"><AppFooter /></div>
        </div>
      </div>
    );
  }
};

export default App;
