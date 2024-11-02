// Import the 'http' module, which provides utilities for creating an HTTP server
const { log } = require('console');
const http = require('http');
const fs = require("fs");

// Create the server using the 'createServer' method, which takes a callback function
// The callback function is executed each time a request is received
// 'req' is the request object, and 'res' is the response object
const server = http.createServer((req, res) => {
    // Log a message to the console whenever the server receives a request
    console.log("Server is running");

    // Log a message to the console 
    // log(req.url, req.method, req.headers)

    // Sending a response back to the client
    // Status code: 200 (OK), Content-Type: text/plain
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('Hello, World!\n'); // End the response and send the string

    const url = req.url;
    const method  = req.method;
    if(url === '/' ){
        res.write('<html>')
        res.write('<head> <title>Enter Message</title></head>');
        res.write('<body> <form action="/message" method="POST"><input type="text"><button type="submit">Click me!</button></form> </body>')
        res.write('</html>')
        return res.end();
    }

    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('message.txt', "Dummy")
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();

    }

    res.setHeader("Content-Type", 'text/html');
    res.write('<html>')
    res.write('<head> <title>Easy Node</title></head>');
    res.write('<body> <h1>Easy Node Project</h1> </body>')
    res.write('</html>')
    res.end();
});

// Listen on port 3000 for incoming requests
// This starts the server and makes it listen for HTTP requests on the specified port
server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
