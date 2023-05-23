// Require
const express = require('express')
const Shorten = require('../../models/shorten')
const Models = require('../../models/models')

// Variable Declaration
const router = express.Router()

// Setting
/* GET */
router.get('/', (req, res) => {
  res.render('shorten')
})

/* POST */
router.post('/', (req, res) => {

  const originalLink = req.body.originalLink

  Shorten.find({ originalLink })
    .then(data => {
      if (data.length > 0) {
        const shortenLink = data[0].shortenLink
        res.render(`shorten`, { originalLink, shortenLink })
        console.log('URL be found from Shorten')

      } else {
        const shortenLink = Models.randomShortenLink(originalLink)

        return Shorten.create({ originalLink, shortenLink })
          .then((link) => {
            res.render(`shorten`, { originalLink, shortenLink })
            console.log('create a new shorten')
          })
          .catch(err => console.log(err))
      }
    })
    .catch(err => console.log(err))
})

// Exports
module.exports = router