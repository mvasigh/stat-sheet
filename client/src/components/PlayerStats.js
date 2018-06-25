import React from 'react';

import './PlayerStats.css';

const PlayerStats = ({ stats, isActive }) => {
  const statsList = Object.entries(stats).map((stat, i) => {
    const [category, value] = stat;
    return (
      <li
        className={
          'player-stats__stat-field' +
          (isActive ? ' player-stats__stat-field--active' : '')
        }
        key={i}
      >
        {value}
      </li>
    );
  });
  return <ul className="player-stats">{statsList}</ul>;
};

export default PlayerStats;
