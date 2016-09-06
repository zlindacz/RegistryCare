import React from 'react';
import AppHeader from './app/app_header_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="app">
        <AppHeader />
        {this.props.children}
      </div>
    );
  }
};

export default App;
