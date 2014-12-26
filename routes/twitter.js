
var Twitter = require('twitter')

module.exports = function (app) {
  var client = new Twitter({
    'consumer_key': process.env.TWITTER_KEY,
    'consumer_secret': process.env.TWITTER_SECRET
  })

  app.get('/api/twitter/post/:id', function (req, res) {
    // TODO
    res.status(500).send('TODO').end()
  })

  app.get('/api/twitter/users/show/:username', function (req, res) {
    client.get('/users/show', {
      'screen_name': req.params.username
    }, function (err, result) {
      if (err) {
        res.status(404).send(err).end()
      } else {
        res.status(200).json(result).end()
      }
    })
  })
}

