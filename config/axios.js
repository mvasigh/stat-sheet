const AUTH_KEY = process.env.AUTH_KEY || require('./keys').AUTH_KEY;

module.exports = {
  baseURL: 'https://api.mysportsfeeds.com/v1.2/pull/nba',
  headers: {
    Authorization: AUTH_KEY,
    'Accept-Encoding': 'gzip'
  }
};
