// Require
const mongoose = require('mongoose')

// Setting
/* dotenv */
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

/* mongoose */
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('err', () => {
  console.log('mongoDB err !')
})

db.once('open', () => {
  console.log('mongoDB connected !')
})

module.exports = db