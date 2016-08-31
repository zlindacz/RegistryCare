import React from 'react';
import AppHeader from './app/app_header_container';

class App extends React.Component {
  render() {
    return(
      <div className="app">
        <AppHeader />
        <h1>The rest of the app!</h1>
        {this.props.children}
      </div>
    );
  }
};

export default App;
