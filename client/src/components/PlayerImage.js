import React from 'react';
import PropTypes from 'prop-types';

import './PlayerImage.css';

const PlayerImage = ({ src, colors, isActive }) => {
  return (
    <div className="player-image">
      <div
        className={
          'player-image__img' + (isActive ? ' player-image__img--active' : '')
        }
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
