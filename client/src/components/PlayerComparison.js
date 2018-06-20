import React from 'react';
import PlayerView from './PlayerView';
import StatCategoryList from './StatCategoryList';

import './PlayerComparison.css';

const PlayerComparison = ({ players }) => {
  let comparison;
  if (players[0] && players[1]) {
    comparison = Object.keys(players[0].stats).map(stat => ({
      label: stat,
      comparison: Number(players[0].stats[stat]) - Number(players[1].stats[stat])
    }));
  }
  return (
    <div className="player-comparison">
      <div className="player-comparison__container">
        <PlayerView player={players[0]} />
        <StatCategoryList comparison={comparison} />
        <PlayerView player={players[1]} />
      </div>
    </div>
  );
};

export default PlayerComparison;
