import React from "react"
import { css } from "@emotion/core"

const EmotionCard = css`
  width: 468px;
  height: 160px;
  border-radius: 8px;
  background-image: url("/bg-laylow.png");
  position: relative;
  &::after {
    content: "";
    z-index:-1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url("/bg-laylow.png");
    filter: blur(35px);
  }
`

const NowListeningCard = () => {
  return (
    <div css={EmotionCard} className="flex p-4 rounded-lg">
      <div className="relative pr-5">
        <span className="absolute bottom-0 px-2 py-px -mb-2 -ml-2 font-medium bg-white rounded-sm">
          TRINITY⭐
        </span>
        <img src="/cover.jpg" className="w-32 h-32 rounded shadow-2xl" alt="" />
      </div>
      <div className="flex flex-col flex-1 w-full justify-evenly">
        <div className="flex flex-col text-white font-montserrat">
          <span className="text-3xl font-semibold leading-none">MEGATRON</span>
          <span className="text-xl leading-7 text-white text-opacity-75">
            Laylow
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
    </div>
  )
}

export default NowListeningCard
