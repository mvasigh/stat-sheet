import React from 'react';
import PropTypes from 'prop-types';

const PlayerInfo = ({ name, number, position, height, weight, season }) => {
  return (
    <div>
      <h1>
        {position} {number} - {name}
      </h1>
      <p>{season}</p>
    </div>
  );
};

export default PlayerInfo;
