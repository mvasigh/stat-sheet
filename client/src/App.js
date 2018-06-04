import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TopBar from './TopBar';
import PlayerComparison from './PlayerComparison';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <PlayerComparison>
        </PlayerComparison>          
      </div>
    );
  }
}

export default App;
