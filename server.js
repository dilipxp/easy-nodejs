// Import the 'http' module, which provides utilities for creating an HTTP server
const http = require('http');

// Create the server using the 'createServer' method, which takes a callback function
// The callback function is executed each time a request is received
// 'req' is the request object, and 'res' is the response object
const server = http.createServer((req, res) => {
    // Log a message to the console whenever the server receives a request
    console.log("Server is running");

    // Sending a response back to the client
    // Status code: 200 (OK), Content-Type: text/plain
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n'); // End the response and send the string
});

// Listen on port 3000 for incoming requests
// This starts the server and makes it listen for HTTP requests on the specified port
server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
