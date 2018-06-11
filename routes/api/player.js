const express = require('express'),
  router = express.Router({ mergeParams: true }),
  AXIOS_CONFIG = require('../../config/axios'),
  axios = require('axios').create(AXIOS_CONFIG);

// @route    GET api/player
// @desc     Retrieves full playerlist for season 'seasonName'
router.get('/', async (req, res) => {
  const { seasonName } = req.params;
  const result = await axios
    .get(`/${seasonName}/active_players.json?rosterstatus=assigned-to-roster`)
    .then(response =>
      response.data.activeplayers.playerentry.map(entry => {
        const { player, team } = entry;
        return {
          ID: player.ID,
          FirstName: player.FirstName,
          LastName: player.LastName,
          JerseyNumber: player.JerseyNumber,
          Position: player.Position,
          team: {
            ID: team.ID,
            City: team.City,
            Name: team.Name
          }
        };
      })
    );
  res.json(result);
});

// @route    GET api/player/:playerName
// @desc     Retrieves cumulative stats in 'seasonName' for player 'playerName'
router.get('/:playerName', async (req, res) => {
  const { seasonName, playerName } = req.params;
  const categories = encodeURIComponent('FG%,3P%,PTS,REB,AST');

  // Get basic player info (name, team, position) and image url
  const info = await axios
    .get(`/${seasonName}/active_players.json?player=${playerName}`)
    .then(response => response.data.activeplayers.playerentry[0].player)
    .then(entry => ({
      ID: entry.ID,
      FirstName: entry.FirstName,
      LastName: entry.LastName,
      JerseyNumber: entry.JerseyNumber,
      Position: entry.Position,
      Height: entry.Height,
      Weight: entry.Weight,
      ImageSrc: entry.officialImageSrc
    }));

  // Get stats for player
  const stats = await axios
    .get(
      `/${seasonName}/cumulative_player_stats.json?player=${playerName}&playerstats=${categories}`
    )
    .then(response => response.data.cumulativeplayerstats.playerstatsentry[0])
    .then(entry => {
      let stats = {};
      for (let stat in entry.stats) {
        stats[entry.stats[stat]['@abbreviation']] = entry.stats[stat]['#text'];
      }
      return stats;
    });

  res.json({ info, season: seasonName, stats });
});

module.exports = router;
