import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import useSWR from "swr"
const fetcher = (...args) => fetch(...args).then(res => res.json())

const svgBackground = url => `data:image/svg+xml;utf8,<svg id="svg" style="opacity: 1;">
<filter id="svgFilter" width="100%" height="100%" x="-0%" y="-0%">
<feGaussianBlur id="svgGaussBlur" in="SourceGraphic" stdDeviation="50"></feGaussianBlur>
<feComponentTransfer>
<feFuncA type="discrete" tableValues="1 1"></feFuncA>
</feComponentTransfer>
</filter>
<image xlink:href="${url}" filter="url(#svgFilter)" width="100%" height="100%" x="0" y="0"></image>
</svg>`

const bgDynamicStyle = props =>
  css`
    background-image: url("/api/blurImage?url=${props.img}"), linear-gradient(267.75deg, #232323 1.64%, #818181 85.79%);
  `

const EmotionCard = styled.div`
  /* background: linear-gradient(267.75deg, #232323 1.64%, #818181 85.79%); */
  /* background-image: */

  width: 468px;
  height: 160px;
  border-radius: 8px;
  ${bgDynamicStyle};
  position: relative;
  background-position: center;
  background-size: cover;
  &::after {
    content: "";
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    ${bgDynamicStyle};
    background-size: cover;
    opacity: 0.8;
    filter: blur(35px);
  }
`

const NowListeningCard = ({ className }) => {
  const { data, error } = useSWR("/api/nowListening/", fetcher)
  if (error) {
    console.log(error)
    return <div>failed to load</div>
  }
  if (!data) return <EmotionCard />
  if (data) console.log(data)
  return (
    <EmotionCard
      img={data.item.album.images[1].url.toString()}
      className={`flex p-4 rounded-lg card ${className}`}
    >
      <a href={data.item.external_urls.spotify} className="relative pr-5">
        <span className="absolute bottom-0 px-2 py-px -mb-2 -ml-2 font-medium truncate bg-white rounded-sm max-w-10/12">
          {data.item.album.name.toString()}
        </span>
        <img
          src={data.item.album.images[1].url}
          className="w-32 h-32 transition-all duration-150 rounded shadow-2xl"
          alt=""
        />
      </a>
      <div className="flex flex-col flex-1 w-full justify-evenly">
        <div className="flex flex-col text-white font-montserrat">
          <span className="text-3xl font-semibold leading-none truncate w-72">
            {data.item.name.toString()}
          </span>
          <span className="text-xl leading-7 text-white text-opacity-75 truncate w-72">
            {data.item.artists.map(e => e.name).join(", ")}
          </span>
        </div>
        <div
          className="relative w-full p-2 overflow-hidden bg-transparent rounded"
          style={{ border: "1px solid rgba(255, 255, 255, 0.13)" }}
        >
          <div
            style={{
              background: "#ffffff90",
              transition: "width 1s ease-in-out",
              width: `calc(
                ${data.progress_ms} / ${data.item.duration_ms} * 100%
              )
            `,
            }}
            className="block h-1 bg-red-800 rounded-full"
          ></div>
        </div>
      </div>
    </EmotionCard>
  )
}

export default NowListeningCard
