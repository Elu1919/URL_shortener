// Require
const express = require('express')
const Shorten = require('../../models/shorten')

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

  return Shorten.create({ originalLink })
    .then(() => res.render(`shorten`, { originalLink }))
    .catch(err => console.log(err))
})

// Exports
module.exports = router