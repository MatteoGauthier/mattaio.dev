import React from "react"
import NowListeningCard from "../components/NowListeningCard"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../layouts"
import TrackItem from "../components/TrackItem"

// const

const Music = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      topSpotify {
        id
        items {
          name
          album {
            images {
              url
              height
              width
            }
          }
          artists {
            name
          }
          external_urls {
            spotify
          }
        }
      }
    }
  `)

  console.log(data)
  const items = data.topSpotify.items
  return (
    <Layout>
      <div className="mt-24 ">
        <div className="container relative flex items-center justify-center mx-auto">
          <NowListeningCard className="z-10" />
          <svg
            className="absolute z-0"
            width="1920"
            height="207"
            viewBox="0 0 1920 207"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-20 103.08C-3.66667 -28.9667 12.6667 -28.9667 29 103.08C43.767 209.8 60.1003 209.8 78 103.08C94.3333 -3.64 110.667 -3.64 127 103.08C145.153 233.58 161.486 233.58 176 103.08C192.333 -27.42 208.667 -27.42 225 103.08C239.143 198.587 255.477 198.587 274 103.08C290.333 7.57333 306.667 7.57333 323 103.08C334.209 138.653 350.542 138.653 372 103.08C388.333 67.5067 404.667 67.5067 421 103.08C444.168 168.427 460.502 168.427 470 103.08C486.333 37.7333 502.667 37.7333 519 103.08C538.595 194.527 554.929 194.527 568 103.08C584.333 11.6333 613.5 80.16 617 103.08C620.5 126 643.365 123.96 666 103.08C682.333 82.2 698.667 82.2 715 103.08C741.315 149.48 757.648 149.48 764 103.08C780.333 56.68 796.667 56.68 813 103.08C839.61 207.867 855.943 207.867 862 103.08C878.333 -1.70667 894.667 -1.70667 911 103.08C921.156 128.6 937.489 128.6 960 103.08C976.333 77.56 992.667 77.56 1009 103.08C1055.53 222.947 1071.86 222.947 1058 103.08C1074.33 -16.7867 1090.67 -16.7867 1107 103.08C1117.14 132.08 1133.48 132.08 1156 103.08C1172.33 74.08 1188.67 74.08 1205 103.08C1238.7 193.753 1245.5 136.5 1254 103.08C1262.5 69.66 1286.67 12.4067 1303 103.08C1321.32 215.793 1337.65 215.793 1352 103.08C1368.33 -9.63333 1384.67 -9.63333 1401 103.08C1414.91 182.347 1431.24 182.347 1450 103.08C1466.33 23.8133 1482.67 23.8133 1499 103.08C1513.26 162.24 1529.6 162.24 1548 103.08C1564.33 43.92 1580.67 43.92 1597 103.08C1621.47 221.207 1637.81 221.207 1646 103.08C1662.33 -15.0467 1678.67 -15.0467 1695 103.08C1706.86 156.44 1723.19 156.44 1744 103.08C1760.33 49.72 1776.67 49.72 1793 103.08C1822 239.187 1838.33 239.187 1842 103.08C1858.33 -33.0267 1874.67 -33.0267 1891 103.08C1902.31 155.473 1918.64 155.473 1940 103.08"
              stroke="#EEEEEE"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="container flex mx-auto mt-12 space-x-10 ">
          <div className="flex flex-col w-1/2 px-8">
            <h1 className="text-3xl font-bold text-center font-display">
              Musiques de qualités
            </h1>
            <ul>
              <li>Ninho</li>
              <li>Ninho</li>
              <li>Ninho</li>
            </ul>
          </div>
          <div className="flex flex-col w-1/2 px-8">
            <h1 className="mb-4 text-3xl font-bold text-center font-display">Top</h1>
            <div className="space-y-3">
              {items.map(track => (
                <TrackItem track={track} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Music
