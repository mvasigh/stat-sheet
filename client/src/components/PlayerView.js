import React from 'react';
import PlayerImage from './PlayerImage';
import PlayerInfo from './PlayerInfo';
import PlayerStats from './PlayerStats';

const PlayerView = ({ player }) => {
  return <div className="player-view">{JSON.stringify(player)}</div>;
};

export default PlayerView;
