import React from 'react';
import './Player.css';

export default () => {
  return (
    <div className="Player">
      <div className="Player-headshot">
        <img src="https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/203518.png" />
      </div>
      <div className="Player-card">
        <div className="Player-info">Player info here</div>
        <div className="Player-stats">Player stats here</div>
      </div>
    </div>
  );
};
