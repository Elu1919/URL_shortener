// Require
const express = require('express')
const home = require('./modules/home')

// Variable Declaration
const router = express.Router()

// Setting
router.use('/', home)

// Exports
module.exports = router