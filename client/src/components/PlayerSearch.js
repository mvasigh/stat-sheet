import React from 'react';

import './PlayerSearch.css';

const PlayerSearch = ({ selectedSeason, onPlayerSearch = f => f }) => {
  let _player;
  const handleSubmit = e => {
    e.preventDefault();
    onPlayerSearch(_player.value.toLowerCase().replace(' ', '-'));
    _player.value = '';
    _player.focus();
  };
  return (
    <form className="player-search" onSubmit={handleSubmit}>
      <input
        className="player-search__search-bar"
        ref={input => (_player = input)}
        type="text"
        placeholder="Search NBA players..."
      />
      <button className="player-search__search-button">Search</button>
    </form>
  );
};

export default PlayerSearch;
