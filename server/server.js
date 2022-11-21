const express = require('express')
const path = require('path')

const temps = require('./routes/temps')
const specialisations = require('./routes/specialisations')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/temps', temps)
server.use('/specialisations', specialisations)

module.exports = server
