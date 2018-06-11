import React from 'react';
import PropTypes from 'prop-types';

const PlayerImage = ({ src, alt }) => {
  return (
    <div className="player-image">
      <img src={src} alt={alt} />
    </div>
  );
};

PlayerImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};

export default PlayerImage;
