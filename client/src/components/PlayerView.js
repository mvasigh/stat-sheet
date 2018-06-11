import React from 'react';
import PlayerImage from './PlayerImage';
import PlayerInfo from './PlayerInfo';
import PlayerStats from './PlayerStats';

const PlayerView = ({ player }) => {
  const { info, stats, team, season } = player;
  return (
    <div className="player-view">
      <PlayerImage
        src={info.ImageSrc}
        alt={`${info.FirstName} ${info.LastName}`}
      />
      <PlayerInfo
        number={info.JerseyNumber}
        name={`${info.FirstName} ${info.LastName}`}
        position={info.Position}
        height={info.Height}
        weight={info.Weight}
        season={season}
      />
      <PlayerStats stats={stats} />
    </div>
  );
};

export default PlayerView;
