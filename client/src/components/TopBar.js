import React from 'react';
import SeasonSelection from './SeasonSelection';
import PlayerSearch from './PlayerSearch';

import './TopBar.css';

const TopBar = ({ selectedSeason, onSeasonChange, onPlayerSearch }) => {
  return (
    <div className="top-bar">
      <div className="top-bar__container">
        <SeasonSelection
          selectedSeason={selectedSeason}
          onSeasonChange={onSeasonChange}
        />
        <PlayerSearch
          selectedSeason={selectedSeason}
          onPlayerSearch={onPlayerSearch}
        />
      </div>
    </div>
  );
};

export default TopBar;
