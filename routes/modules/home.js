// Require
const express = require('express')
const Shorten = require('../../models/shorten')

// Variable Declaration
const router = express.Router()

// Setting
/* GET */
router.get('/', (req, res) => {
  res.render('home')
})

// Exports
module.exports = router