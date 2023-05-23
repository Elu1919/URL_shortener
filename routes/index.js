// Require
const express = require('express')
const home = require('./modules/home')
const shorten = require('./modules/shorten')
const ACtransform = require('./modules/ACtransform')

// Variable Declaration
const router = express.Router()

// Setting
router.use('/', home)
router.use('/shorten', shorten)
router.use('/ACtransform', ACtransform)

// Exports
module.exports = router