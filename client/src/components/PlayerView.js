import React from 'react';
import PlayerImage from './PlayerImage';
import PlayerInfo from './PlayerInfo';
import PlayerStats from './PlayerStats';

import './PlayerView.css';
import data from '../data/index';

const PlayerView = ({
  player = data.dummyPlayer,
  isActive,
  slotNumber,
  onPlayerSelect = f => f
}) => {
  const { info, stats, season } = player;
  const colors = data.teams.find(tm => tm.name === player.info.team.Name)
    .colors;
  return (
    <div className="player-view" onClick={() => onPlayerSelect(slotNumber)}>
      <PlayerImage src={info.ImageSrc} colors={colors} isActive={isActive} />
      <PlayerInfo
        {...info}
        season={season}
        colors={colors}
        isActive={isActive}
      />
      <PlayerStats stats={stats} isActive={isActive} />
    </div>
  );
};

export default PlayerView;
