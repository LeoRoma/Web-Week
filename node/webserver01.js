// Use a library http

var http = require('http');
var port = 9000
console.log('HTTP Web Server')

http.createServer((request, response) => {
    console.log('HTTP Request Received');
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('<p>Plain text sent to a <strong>web page</strong></p>');
}).listen(port, '127.0.0.1');

console.log('Server listening on port' + port)