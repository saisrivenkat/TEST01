const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
  if (req.url === '/users') {
    let users;
    fs.readFile('./data.json', 'utf-8', (err, data) => {
      const users = JSON.parse(data);
      res.writeHead(200, { 'Content-type': 'application/json' })
      res.end(users)
    })
  } else if (req.url === '/overview') {
    res.end("overview page")
  }
})
server.listen(8080, '127.0.0.1', () => {
  console.log("server is on")
})