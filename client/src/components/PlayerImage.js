import React from 'react';
import PropTypes from 'prop-types';

import './PlayerImage.css';

const PlayerImage = ({ src, colors }) => {
  return (
    <div className="player-image">
      <div
        className="player-image__img"
        style={{
          backgroundImage: `url(${src})`,
          backgroundColor: colors.primary
        }}
      />
    </div>
  );
};

PlayerImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};

export default PlayerImage;
