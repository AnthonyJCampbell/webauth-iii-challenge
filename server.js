const express = require('express');
const helmet = require('helmet');
const cors = require('cors')

// ROUTES
const Router = require('./routes/routes');

const server = express();

server.use(helmet())
server.use(express.json())
server.use(cors())

// Use ROUTES
server.use('/api', Router)

server.get('/', (req, res) => {
  res.send("It's alive!");
});

module.exports = server