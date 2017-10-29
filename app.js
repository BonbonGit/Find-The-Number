const http = require('http');
const fs = require('fs');
const io = require('socket.io')();

const server = http.createServer((req, res) => {
  if(req.url == '/' || req.url == '/index' || req.url == '/index.html'){
    fs.readFile(__dirname + '/html-css/index.html', 'utf-8', (error, content) => {
      console.log('C à index : ' + __dirname + 'html-css/index.html');
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(content);

    });
  } else if(req.url == '/html-css/roomList.html'){
    fs.readFile(__dirname + '/html-css/roomList.html', 'utf-8', (error, content) => {
      console.log('C à roomList');
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(content);

    });
  } else {
    fs.readFile(__dirname + '/html-css/template.html', 'utf-8', (error, content) => {
      console.log('C à template');
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(content);
    });
  }
});

io.listen(server);
// Quand un client se connecte, on le note dans la console
io.on('connection', (socket) => {
  console.log('Un client est connecté !');
});

server.listen(3000);
