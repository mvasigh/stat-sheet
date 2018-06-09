import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TopBar />
      </div>
    );
  }
}

export default App;
