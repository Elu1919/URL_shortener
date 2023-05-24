const Models = {

  randomShortenLink() {

    // random data
    const enUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const enLowercase = enUppercase.toLocaleLowerCase()
    const num = "0123456789"

    // Variable Declaration
    const shortenLength = 5

    let shortenLink = ""

    for (i = 0; i <= shortenLength - 1; i++) {

      const randomData = (enLowercase + enLowercase + num).split("")
      const random = Math.floor(Math.random() * randomData.length)

      shortenLink += randomData[random]

    }
    return shortenLink
  },

  copyLink() {

    const link = document.getElementById('shorten-link').innerText
    const btnCopy = document.querySelector('#btn-copy')

    btnCopy.addEventListener('click', () => {

      navigator.clipboard.writeText(link)
        .then(() => alert('copied'))
        .catch(err => console.log(err))

      console.log("copied")

    })
  },

}

module.exports = ('Models', Models)