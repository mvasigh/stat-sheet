const express = require('express'),
  router = express.Router({ mergeParams: true }),
  AXIOS_CONFIG = require('../../config/axios'),
  axios = require('axios').create(AXIOS_CONFIG);

// @route    GET api/player
// @desc     Retrieves full playerlist for season 'seasonName'
router.get('/', async (req, res) => {
  try {
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
            Age: player.Age,
            Image: player.officialImageSrc,
            team: {
              ID: team.ID,
              City: team.City,
              Name: team.Name
            }
          };
        })
      );
    res.json(result);
  } catch (e) {
    console.log(e);
  }
});

// @route    GET api/player/:playerName
// @desc     Retrieves cumulative stats in 'seasonName' for player 'playerName'
router.get('/:playerName', async (req, res) => {
  try {
    const { seasonName, playerName } = req.params;
    const result = await axios
      .get(`/${seasonName}/cumulative_player_stats.json?player=${playerName}`)
      .then(response => response.data.cumulativeplayerstats.playerstatsentry[0])
      .then(entry => {
        let player = { ...entry.player, team: entry.team, stats: {} };
        for (let stat in entry.stats) {
          player.stats[entry.stats[stat]['@abbreviation']] =
            entry.stats[stat]['#text'];
        }
        return player;
      });
    res.json(result);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
