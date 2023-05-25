// Require
const express = require('express')
const Shorten = require('../../models/shorten')
const Models = require('../../models/models')
const shorten = require('../../models/shorten')

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
  const shortName = "ACtransform"


  Shorten.find({ originalLink })
    .then(data => {
      if (data.length > 0) {
        const shortenLink = data[0].shortenLink
        res.render(`shorten`, { originalLink, shortenLink, shortName })
        //console.log('find by Shorten')

      } else {
        Shorten.find({})
          .lean()
          .then(data => {
            const shortenLink = Models.randomShortenLink(data)

            Shorten.create({ originalLink, shortenLink })
              .then(() => {
                res.render(`shorten`, { originalLink, shortenLink, shortName })
                //console.log('create a new shorten')
              })
              .catch(err => console.log(err))
          })
          .catch(err => console.log(err))
      }
    })
    .catch(err => console.log(err))
})

// Exports
module.exports = router