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

const dynamicStyle = props =>
  css`
    background: url("/api/blurImage?url=${props.img}");
  `


const EmotionCard = styled.div`
  width: 468px;
  height: 160px;
  border-radius: 8px;
  ${dynamicStyle};
  position: relative;
  background-position: center;
  background-size:cover;
  &::after {
    content: "";
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    ${dynamicStyle};
    background-size:cover;
    filter: blur(35px);
  }
`

const NowListeningCard = () => {
  const { data, error } = useSWR("/api/nowListening", fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  if (data) console.log(data)
  return (
    <EmotionCard
      img={data.item.album.images[1].url.toString()}
      className="flex p-4 rounded-lg"
    >
      <div className="relative pr-5">
        <span className="absolute bottom-0 px-2 py-px -mb-2 -ml-2 font-medium bg-white rounded-sm">
          {data.item.album.name.toString()}
        </span>
        <img
          src={data.item.album.images[1].url}
          className="w-32 h-32 rounded shadow-2xl"
          alt=""
        />
      </div>
      <div className="flex flex-col flex-1 w-full justify-evenly">
        <div className="flex flex-col text-white font-montserrat">
          <span className="text-3xl font-semibold leading-none">
            {data.item.name.toString()}
          </span>
          <span className="text-xl leading-7 text-white text-opacity-75">
            {data.item.artists.map(e => e.name).join(", ")}
          </span>
        </div>
        <div
          className="p-2 bg-transparent rounded"
          style={{ border: "1px solid rgba(255, 255, 255, 0.13)" }}
        >
          <div
            style={{
              background:
                "linear-gradient(270deg, #1AACFF 0%, #FFFFFF 100.55%)",
            }}
            className="block w-1/2 h-1 bg-red-800 rounded-full"
          ></div>
        </div>
      </div>
    </EmotionCard>
  )
}

export default NowListeningCard
