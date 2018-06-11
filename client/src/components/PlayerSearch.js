import React from 'react';

const PlayerSearch = ({ selectedSeason, onPlayerSearch = f => f }) => {
  let _player;
  const handleSubmit = e => {
    e.preventDefault();
    onPlayerSearch(_player.value);
    _player.value = '';
    _player.focus();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input ref={input => (_player = input)} type="text" />
      <button>Search</button>
    </form>
  );
};

export default PlayerSearch;
