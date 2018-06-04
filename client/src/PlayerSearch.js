import React, { Component } from 'react';

export default class PlayerSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: '',
      seasonName: ''
    };
  }
  render() {
    return (
      <form className="PlayerSearch">
        <input
          className="PlayerSearch-input"
          type="text"
          placeholder="Search for players..."
        />
        <button className="PlayerSearch-submit">Go</button>
      </form>
    );
  }
}
