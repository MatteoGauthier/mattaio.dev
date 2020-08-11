const { getSpotifyData, parseUrl } = require("./_utils")

module.exports = async (req, res) => {
  const { pathname = "/", query = {} } = parseUrl(req.url, true)

  const type = query.type ? query.type : "tracks"
  const time_range = query.time_range ? query.time_range : "medium_term"

  res.json(
    await getSpotifyData(
      `https://api.spotify.com/v1/me/top/${type}?time_range=${time_range}&limit=50`
    )
  )
}
