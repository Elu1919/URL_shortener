const Shorten = require('../models/shorten')

const Models = {

  randomShortenLink(linkData) {

    // random data
    const enUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const enLowercase = enUppercase.toLocaleLowerCase()
    const num = "0123456789"

    // Variable Declaration
    const randomData = (enLowercase + enUppercase + num).split("")
    const shortenLength = 5

    let shortenLink = ""

    for (i = 0; i <= shortenLength - 1; i++) {
      const random = Math.floor(Math.random() * randomData.length)
      shortenLink += randomData[random]
    }

    const check = linkData.some(link => link.shortenLink === shortenLink)

    if (check) {
      //console.log(`${shortenLink}已重複`)
      shortenLink = this.randomShortenLink(linkData)
    } else {
      //console.log(`已生成${shortenLink}`)
    }

    return shortenLink

  },
}

module.exports = ('Models', Models)