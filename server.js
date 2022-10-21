const express = require('express')
const htmlRoutes = require('./routes/htmlRoutes')

const PORT = process.env.PORT || 3001
const app = express()

// parsing incoming string/array data
app.use(express.urlencoded({ extended: true }))
//parsing incoming JSON data
app.use(express.json())

//giving access to front-end assets
app.use(express.static('public'))

//html routes
app.use('/', htmlRoutes)

app.listen(PORT, () => {
    console.log(`API server now on ${PORT}!`)
})