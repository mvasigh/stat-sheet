import React from 'react';
import StatCategory from './StatCategory';
import data from '../data';

import './StatCategoryList.css';

const StatCategoryList = ({ comparison = data.categories }) => {
  const statCategories = comparison.map((stat, i) => {
    return <StatCategory {...stat} key={i} />;
  });
  return <ul className="stat-category-list">{statCategories}</ul>;
};

export default StatCategoryList;
