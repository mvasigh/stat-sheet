import React from 'react';
import { all } from '../config/seasons';

import './SeasonSelection.css';

const SeasonSelection = ({
  allSeasons = all,
  selectedSeason = '',
  onSeasonChange = f => console.log(f)
}) => {
  let _season;
  const handleChange = e => {
    onSeasonChange(_season.value);
  };
  return (
    <select
      className="season-selection"
      ref={select => (_season = select)}
      onChange={handleChange}
    >
      {allSeasons.map((season, i) => (
        <option key={i} value={season.name}>
          {season.label}
        </option>
      ))}
    </select>
  );
};

export default SeasonSelection;
