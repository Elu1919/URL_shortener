// Require
const mongoose = require('mongoose')

// Variable Declaration
const Schema = mongoose.Schema

const shortenSchema = new Schema({
  originalLink: {
    type: String,
    required: true,
  },
  shortenLink: {
    type: String,
  },
})

module.exports = mongoose.model('Shorten', shortenSchema)