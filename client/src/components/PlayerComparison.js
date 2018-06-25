import React from 'react';
import PlayerView from './PlayerView';
import StatCategoryList from './StatCategoryList';

import './PlayerComparison.css';

const PlayerComparison = ({ players, activeSlot, onPlayerSelect = f => f }) => {
  let comparison;
  if (players[0] && players[1]) {
    comparison = Object.keys(players[0].stats).map(stat => ({
      label: stat,
      comparison:
        Number(players[0].stats[stat]) - Number(players[1].stats[stat])
    }));
  }
  return (
    <div className="player-comparison">
      <div className="player-comparison__container">
        <PlayerView
          player={players[0]}
          isActive={activeSlot == 1}
          slotNumber={1}
          onPlayerSelect={onPlayerSelect}
        />
        <StatCategoryList comparison={comparison} />
        <PlayerView
          player={players[1]}
          isActive={activeSlot == 2}
          slotNumber={2}
          onPlayerSelect={onPlayerSelect}
        />
      </div>
    </div>
  );
};

export default PlayerComparison;
