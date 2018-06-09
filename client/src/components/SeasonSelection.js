import React from 'react';

const SeasonSelection = ({
  seasons = [],
  onSeasonChange = f => console.log(f)
}) => {
  let _season;
  const handleChange = () => {
    onSeasonChange(_season.value);
  };
  return (
    <select ref={select => (_season = select)} onChange={handleChange}>
      {seasons.map((season, i) => (
        <option key={i} value={season.name}>
          {season.label}
        </option>
      ))}
    </select>
  );
};

export default SeasonSelection;
