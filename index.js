const http = require('http')

const listiner = (rec, res) => {
  res.writeHead(200)
  res.end ('Hello World11')
}

const server = http.createServer(listiner);
server.listen(8080)