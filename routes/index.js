// Require
const express = require('express')
const home = require('./modules/home')
const shorten = require('./modules/shorten')

// Variable Declaration
const router = express.Router()

// Setting
router.use('/', home)
router.use('/shorten', shorten)

// Exports
module.exports = router