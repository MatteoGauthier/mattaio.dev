const { nowPlaying } = require("./_utils")

module.exports = async (req, res) => {

  res.json(await nowPlaying())
}
