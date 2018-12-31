import React, { Component } from 'react';
import TopMenu from './components/TopMenu';

import './App.css';
import DirectoryView from './components/directoryView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopMenu />
        <DirectoryView />
      </div>
    );
  }
}

export default App;

// comment
