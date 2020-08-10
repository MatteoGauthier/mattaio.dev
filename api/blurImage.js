const { parseUrl } = require("./_utils")
var Jimp = require("jimp")
module.exports = async (req, res) => {
  const { pathname = "/", query = {} } = parseUrl(req.url, true)

  const image = await Jimp.read(query.url)

  image.blur(5)
  console.log(image)
  res.setHeader("Content-Type", `image/jpeg`)
  res.status(200).end(await image.getBufferAsync(`image/jpeg`))
}
