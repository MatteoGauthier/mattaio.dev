import fetch from "isomorphic-unfetch"
import { stringify } from "querystring"
const { parse: parseUrl } = require("url")



const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64")
const Authorization = `Basic ${basic}`

async function getAuthorizationToken() {
  const url = new URL("https://accounts.spotify.com/api/token")
  const body = stringify({
    grant_type: "refresh_token",
    refresh_token,
  })
  const response = await fetch(`${url}`, {
    method: "POST",
    headers: {
      Authorization: Authorization,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  }).then(r => r.json())

  return `Bearer ${response.access_token}`
}

async function nowPlaying() {
  const Authorization = await getAuthorizationToken()
  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization,
    },
  })
  const { status } = response
  if (status === 204) {
    return {}
  } else if (status === 200) {
    const data = await response.json()
    return data
  }
}

async function getSpotifyData(url) {
  const Authorization = await getAuthorizationToken()
  const response = await fetch(url, {
    headers: {
      Authorization,
    },
  })
  const { status } = response
  if (status !== 200) console.log(status)
  if (status === 204) {
    return {}
  } else if (status === 200) {
    const data = await response.json()
    return data
  }
}
module.exports = { nowPlaying, parseUrl, getSpotifyData }
