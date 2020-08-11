import React from "react"
import PlayIcon from "../assets/icons/PlayIcon"
const TrackItem = ({ track: { name, album, artists, external_urls } }) => {
  return (
    <div className="flex items-center justify-between overflow-hidden">
      <div className="flex items-center">
        <img
          src={album.images[2].url}
          className="mr-3 rounded-sm shadow"
          alt=""
        />
        <div className="flex flex-col font-montserrat">
          <span className="text-lg font-medium text-black ">{name}</span>

          <span className="text-sm text-gray-700">
            {artists.map(e => e.name).join(", ")}
          </span>
        </div>
      </div>
      <a target="_blank" href={external_urls.spotify}>
        <PlayIcon />
      </a>
    </div>
  )
}

export default TrackItem
