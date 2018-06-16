import React from 'react';
import PlayerImage from './PlayerImage';
import PlayerInfo from './PlayerInfo';
import PlayerStats from './PlayerStats';

import './PlayerView.css';
import data from '../data/index';

const PlayerView = ({ player = {} }) => {
  const { info, stats, season } = player;
  const colors = data.teams.find(tm => tm.name === player.info.team.Name)
    .colors;
  return (
    <div className="player-view">
      <PlayerImage src={info.ImageSrc} colors={colors} />
      <PlayerInfo {...info} season={season} colors={colors} />
      <PlayerStats stats={stats} />
    </div>
  );
};

export default PlayerView;
