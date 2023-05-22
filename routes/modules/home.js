// Require
const express = require('express')

// Variable Declaration
const router = express.Router()

// Setting
router.get('/', (req, res) => {
  res.render('home')
})

// Exports
module.exports = router