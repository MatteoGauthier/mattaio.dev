const { nowPlaying } = require("./utils")

module.exports = async (req, res) => {

  res.json(await nowPlaying())
}
