import React from 'react';
import AppHeader from './app/app_header_container';

const App = ({children}) => (
    <div className="app">
      <AppHeader />
      <h1>The rest of the app!</h1>
      {children}
    </div>
);

export default App;
