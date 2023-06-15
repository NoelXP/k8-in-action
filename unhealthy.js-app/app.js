const http = require('http');
const os = require('os');

console.log("kubia server starting...");

var requestCount = 0;

var hanbdler = function(request, response) {
    console.log("Received request from " + request.connection.remoteAddress);
    requestCount++;

    if (requestCount > 5) {
        response.writeHead(500);
        response.end("I'm not well. Please restart me!");
        return;
    }

    response.writeHead(200);
    response.end("You've hit " + os.hostname() + "\n");
};

var www = http.createServer(hanbdler);
www.listen(8080);