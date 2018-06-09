import React from 'react';
import PropTypes from 'prop-types';

const PlayerImage = ({ src }) => {
  return (
    <div className="player-image">
      <img src={src} alt="" />
    </div>
  );
};

PlayerImage.propTypes = {
  src: PropTypes.string
};

export default PlayerImage;
