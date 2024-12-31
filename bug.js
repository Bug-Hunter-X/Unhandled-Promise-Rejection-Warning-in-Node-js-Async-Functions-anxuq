const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');

//Unhandled promise rejection warning occurs if an error is thrown in an async function not caught by a try...catch statement, or not handled with `.catch()`