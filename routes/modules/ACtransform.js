// Require
const express = require('express')
const Shorten = require('../../models/shorten')

// Variable Declaration
const router = express.Router()

// Setting
/* GET */
router.get('/:shortenLink', (req, res) => {

  const { shortenLink } = req.params.shortenLink

  Shorten.find(shortenLink)
    .lean()
    .then(data => {
      const originalLink = data[0].originalLink
      res.redirect(originalLink)
    })
    .catch(err => console.log(err))

})

// Exports
module.exports = router