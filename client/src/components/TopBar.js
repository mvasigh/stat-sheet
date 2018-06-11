import React from 'react';
import SeasonSelection from './SeasonSelection';
import PlayerSearch from './PlayerSearch';

const TopBar = ({ selectedSeason, onSeasonChange, onPlayerSearch }) => {
  return (
    <div className="top-bar">
      <SeasonSelection
        selectedSeason={selectedSeason}
        onSeasonChange={onSeasonChange}
      />
      <PlayerSearch
        selectedSeason={selectedSeason}
        onPlayerSearch={onPlayerSearch}
      />
    </div>
  );
};

export default TopBar;
