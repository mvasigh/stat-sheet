import React from 'react';

const Player = ({ player }) => {
  return (
    <div className="player">
      <PlayerImage />
      <PlayerInfo />
      <PlayerStats />
    </div>
  );
};

export default Player;
