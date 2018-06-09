import React from 'react';
import SeasonSelection from './SeasonSelection';
import PlayerSearch from './PlayerSearch';

const TopBar = ({ season }) => {
  return (
    <div className="top-bar">
      <SeasonSelection />
      <PlayerSearch season={season} />
    </div>
  );
};

export default TopBar;
