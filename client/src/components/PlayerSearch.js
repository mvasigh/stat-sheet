import React from 'react';

const PlayerSearch = ({ season, onSearch = f => f }) => {
  let _player;
  const submit = e => {
    e.preventDefault();
    onSearch(_player.value);
    _player.value = '';
    _player.focus();
  };
  return (
    <form onSubmit={submit}>
      <input ref={input => (_player = input)} type="text" />
      <button>Search</button>
    </form>
  );
};

export default PlayerSearch;
