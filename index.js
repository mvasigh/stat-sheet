const express = require('express'),
  path = require('path');

const playerRoutes = require('./routes/api/player');

const app = express();

// APP CONFIG
// ===========
app.use(express.static(path.join(__dirname, 'client/build')));

// ROUTES CONFIG
// ==============
app.use('/api/season/:seasonName/player', playerRoutes);
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
