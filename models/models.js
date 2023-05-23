const Shorten = require("./shorten")

const Models = {

  randomShortenLink() {

    // random data
    const enUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const enLowercase = enUppercase.toLocaleLowerCase()
    const num = "0123456789"

    // Variable Declaration
    const shorten = "ACtransform/"
    const shortenLength = 5

    let shortenLink = shorten

    for (i = 0; i <= shortenLength - 1; i++) {

      const randomData = (enLowercase + enLowercase + num).split("")
      const random = Math.floor(Math.random() * randomData.length)

      shortenLink += randomData[random]

    }
    return shortenLink
  },

}

module.exports = ('Models', Models)