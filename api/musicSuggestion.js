const { getSpotifyData } = require("./_utils")

module.exports = async (req, res) => {
  const playlist_id = process.env.SPOTIFY_MUSIC_SUGGESTION_PLAYLIST_ID
   res.json(
    await getSpotifyData(
      `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`
    )
  )
}
