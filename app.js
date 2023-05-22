// Require
const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
require('./config/mongoose')

const routes = require('./routes')

// Variable Declaration
const app = express()
const port = 3000

// Setting
/* body-parser */
app.use(bodyParser.urlencoded({ extended: true }))

/* route */
app.use(routes)

/* handlebars */
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

/* method-override */
app.use(methodOverride('_method'))


// Listen
app.listen(port, () => {
  console.log(`Express is running on https://localhost:${port}`)
})