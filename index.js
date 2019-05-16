const server = require('./server.js')

const port = 3030
server.listen(port, () => {
  console.log(`\n** Listening on Port ${port} **\n`)
}) 