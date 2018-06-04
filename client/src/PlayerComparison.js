import React, { Component } from 'react';
import './PlayerComparison.css';
import Player from './Player';
import StatCategories from './StatCategories';

class PlayerComparison extends Component {
  render() {
    return (
      <div className="PlayerComparison">
        <StatCategories />
        <Player />
        <Player />
      </div>
    );
  }
}

export default PlayerComparison;
