import React from 'react';
import UpArrowIcon from './UpArrowIcon';
import DownArrowIcon from './DownArrowIcon';

import './StatCategory.css';

const StatCategory = ({ label, comparison }) => {
  return (
    <li className="stat-category">
      {comparison === 0 ? (
        ''
      ) : comparison > 0 ? (
        <UpArrowIcon />
      ) : (
        <DownArrowIcon />
      )}
      <div className="stat-category__label">{label}</div>
      {comparison === 0 ? (
        ''
      ) : comparison > 0 ? (
        <DownArrowIcon />
      ) : (
        <UpArrowIcon />
      )}
    </li>
  );
};

export default StatCategory;
