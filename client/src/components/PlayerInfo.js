import React from 'react';

import './PlayerInfo.css';

const PlayerInfo = ({
  FirstName,
  LastName,
  JerseyNumber,
  Position,
  Weight,
  colors
}) => {
  return (
    <div className="player-info">
      <div
        className="player-info__basic"
        style={{ backgroundColor: colors.secondary }}
      >
        <span
          className="player-info__number"
          style={{ color: colors.primary }}
        >{`#${JerseyNumber}`}</span>
        <span className="player-info__name">{`${FirstName} ${LastName}`}</span>
      </div>
    </div>
  );
};

export default PlayerInfo;
