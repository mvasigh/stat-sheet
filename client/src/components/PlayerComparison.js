import React from 'react';
import PlayerView from './PlayerView';

const PlayerComparison = ({ players = [] }) => {
  return (
    <div className="player-comparison">
      {players.map((player, i) => <PlayerView player={player} key={i + 1} />)}
    </div>
  );
};

export default PlayerComparison;
