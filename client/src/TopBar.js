import React, { Component } from 'react';
import './TopBar.css';

import PlayerSearch from './PlayerSearch';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasonName: '',
      playerName: ''
    };
  }
  render() {
    return (
      <nav className="TopBar">
        <div className="TopBar-logo">B</div>
        <div className="TopBar-item">
          <PlayerSearch />
        </div>
        <div className="TopBar-item">
          <select>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
          </select>
        </div>
      </nav>
    );
  }
}

export default TopBar;
