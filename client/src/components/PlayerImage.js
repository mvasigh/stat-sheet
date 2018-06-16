import React from 'react';
import PropTypes from 'prop-types';

import './PlayerImage.css';

const PlayerImage = ({ src, colors }) => {
  return (
    <div
      className="player-image"
      style={{
        backgroundImage: `url(${src})`,
        backgroundColor: colors.primary
      }}
    />
  );
};

PlayerImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};

export default PlayerImage;
