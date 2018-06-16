import React from 'react';

const PlayerStats = ({ stats }) => {
  const statsList = Object.entries(stats).map((stat, i) => {
    const [category, value] = stat;
    return (
      <li key={i}>
        {category}: {value}
      </li>
    );
  });
  return <ul className="player-stats">{statsList}</ul>;
};

export default PlayerStats;
