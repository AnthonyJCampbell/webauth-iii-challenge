const express = require('express');
const helmet = require('helmet');
const cors = require('cors')

// ROUTES
// const XXXauth = require()

const server = express();

server.use(helmet())
server.use(express.json())
server.use(cors())

// Use ROUTES
// server.use('/api', XXXauth);

server.get('/', (req, res) => {
  console.log('he')
  res.send("It's alive!");
});

module.exports = server