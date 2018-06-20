import React from 'react';

const StatCategory = ({ label, comparison }) => {
  return (
    <li className="stat-category">
      {label} - {comparison}
    </li>
  );
};

export default StatCategory;
