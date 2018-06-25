import React from 'react';
import data from '../data';

import './PlayerInfo.css';

const PlayerInfo = ({
  FirstName,
  LastName,
  JerseyNumber,
  Position,
  Weight,
  team,
  colors,
  season,
  isActive
}) => {
  return (
    <div className="player-info">
      <div
        className={
          'player-info__basic' + (isActive ? ' player-info__basic--active' : '')
        }
        style={{ borderTopColor: colors.secondary }}
      >
        <span
          className="player-info__number"
          style={{ backgroundColor: colors.primary }}
        >
          {JerseyNumber || ' '}
        </span>
        <div className="player-info__identity">
          <span className="player-info__name">
            {`${FirstName} ${LastName}`}
          </span>
          <span className="player-info__position-team">
            {`${Position} - ${team.City} ${team.Name}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
