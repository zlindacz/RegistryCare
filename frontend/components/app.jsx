import React from 'react';
import AppHeader from './app/app_header_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="app">
        <div className="background-image-top"><AppHeader /></div>
        {this.props.children}
      </div>
    );
  }
};

export default App;
