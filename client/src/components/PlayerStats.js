import React from 'react';

import './PlayerStats.css';

const PlayerStats = ({ stats }) => {
  const statsList = Object.entries(stats).map((stat, i) => {
    const [category, value] = stat;
    return (
      <li className="player-stats__stat-field" key={i}>
        {category}: {value}
      </li>
    );
  });
  return <ul className="player-stats">{statsList}</ul>;
};

export default PlayerStats;
