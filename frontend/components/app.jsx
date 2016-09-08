import React from 'react';
import AppHeader from './app/app_header_container';
import AppFooter from './app/app_footer_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="app">
        <div className="background-image-top"><AppHeader /></div>
        {this.props.children}
        <div className="background-image-foot"><AppFooter /></div>
      </div>
    );
  }
};

export default App;
