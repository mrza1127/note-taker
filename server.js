const express = require('express')
const path = require('path')
const { passThrough } = require('stream')
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require('./routes/apiRoutes')
const notes = require("./db/db.json")

const PORT = process.env.PORT || 3001
const app = express()

// parsing incoming string/array data
app.use(express.urlencoded({ extended: true }))
//parsing incoming JSON data
app.use(express.json())

//giving access to front-end assets
app.use(express.static('public'))

//html and api routes
app.use('/', htmlRoutes)
app.use('/api', apiRoutes)

// app.get('/api', (req, res) => {
//     res.json(notes)
// })

app.listen(PORT, () => {
    console.log(`API server now on ${PORT}!`)
})