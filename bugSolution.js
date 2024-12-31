const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

//Use a try catch block to handle any errors that might occur
server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(8080);
console.log('Server is running on port 8080');