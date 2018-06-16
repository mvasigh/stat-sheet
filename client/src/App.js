import React, { Component } from 'react';
import TopBar from './components/TopBar';
import PlayerComparison from './components/PlayerComparison';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSeason: '2018-playoff',
      activeSlot: 1,
      players: Array(2)
    };
    this.handleSeasonChange = this.handleSeasonChange.bind(this);
    this.handlePlayerSearch = this.handlePlayerSearch.bind(this);
  }
  handleSeasonChange(season) {
    this.setState({ selectedSeason: season });
  }
  async handlePlayerSearch(playerName) {
    let { players, activeSlot } = this.state;
    players[activeSlot - 1] = await this.getPlayer(playerName);
    activeSlot = activeSlot === 1 ? 2 : 1;
    this.setState({ players, activeSlot });
  }
  getPlayer(player, season = this.state.selectedSeason) {
    return fetch(`/api/season/${season}/player/${player}`)
      .then(response => response.json())
      .then(player => ({ ...player, season }))
      .catch(e => console.log(e));
  }
  render() {
    return (
      <div className="app">
        <TopBar
          selectedSeason={this.state.selectedSeason}
          onSeasonChange={this.handleSeasonChange}
          onPlayerSearch={this.handlePlayerSearch}
        />
        <PlayerComparison players={this.state.players} />
      </div>
    );
  }
}

export default App;
