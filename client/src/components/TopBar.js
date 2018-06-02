import React from 'react';

const TopBar = props => {
  const seasons = [
    {
      label: '2015-16 Regular Season',
      name: '2015-2016-regular'
    },
    {
      label: '2015-16 Playoffs',
      name: '2016-playoff'
    },
    {
      label: '2016-17 Regular Season',
      name: '2016-2017-regular'
    },
    {
      label: '2016-17 Playoffs',
      name: '2017-playoff'
    },
    {
      label: '2017-18 Regular Season',
      name: '2017-2018-regular'
    },
    {
      label: '2017-18 Playoffs',
      name: '2018-playoff'
    }
  ];
  const seasonOptions = seasons.map(season => (
    <option value={season.name}>{season.label}</option>
  ));
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand">NBA</a>
        <form className="form-inline">
          <div className="form-group">
            <select className="custom-select">{seasonOptions}</select>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default TopBar;
