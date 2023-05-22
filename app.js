// Require
const express = require('express')
const exphbs = require('express-handlebars')
require('./config/mongoose')

const routes = require('./routes')

// Variable Declaration
const app = express()
const port = 3000

// Setting
/* route */
app.use(routes)

/* handlebars */
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')


// Listen
app.listen(port, () => {
  console.log(`Express is running on https://localhost:${port}`)
})