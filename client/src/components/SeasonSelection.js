import React from 'react';

const SeasonSelection = ({
  allSeasons = [
    {
      name: 'hello',
      label: 'world'
    },
    {
      name: 'test',
      label: 'run'
    }
  ],
  selectedSeason = '',
  onSeasonChange = f => console.log(f)
}) => {
  let _season;
  const handleChange = e => {
    onSeasonChange(_season.value);
  };
  return (
    <select ref={select => (_season = select)} onChange={handleChange}>
      {allSeasons.map((season, i) => (
        <option key={i} value={season.name}>
          {season.label}
        </option>
      ))}
    </select>
  );
};

export default SeasonSelection;
