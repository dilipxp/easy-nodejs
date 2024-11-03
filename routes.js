const fs = require("fs"); // Import the 'fs' module for file system operations
const { on } = require('events'); // Import the 'events' module for event handling
const { log } = require('console'); // Import the 'console' module for logging



exports.handler = requestHandler = (req, res) =>{

    console.log("Server is running"); // Log a message indicating the server is running

    const url = req.url; // Get the URL of the incoming request
    const method = req.method; // Get the HTTP method (GET, POST, etc.) of the request

    // Check if the request URL is '/' (root path)
if (url === '/') {
    // Send a simple HTML form as the response
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Click me!</button></form></body>');
    res.write('</html>');
    return res.end(); // End the response
}

// Check if the request URL is '/message' and the method is 'POST'
if (url === '/message' && method === 'POST') {
    const body = []; // Initialize an empty array to collect incoming data chunks

    // Listen for 'data' events to collect chunks of the request body
    req.on('data', (chunk) => {
        log(chunk); // Log each chunk of data received
        body.push(chunk); // Push the chunk into the 'body' array
    });

    // Listen for the 'end' event, indicating all data has been received
   return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString(); // Concatenate and convert the collected data to a string
        const message = parsedBody.split('=')[1]; // Extract the message content from the parsed data
        fs.writeFile('message.txt', message, ()=>{
            // Redirect the user back to the root path with a 302 status code
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end(); // End the response
        }); // Write the message to 'message.txt' (synchronously)
    });

}

// For any other URL, send a simple HTML page as the response
res.setHeader("Content-Type", 'text/html'); // Set the Content-Type header to 'text/html'
res.write('<html>');
res.write('<head><title>Easy Node</title></head>');
res.write('<body><h1>Easy Node Project</h1></body>');
res.write('</html>');
res.end(); // End the response
}

// Export modules 1
// module.exports = requestHandler;

// Export modules 2
// module.exports = {
//     handler : requestHandler,
//     someText : "This is a handler function!"
// }

// exports.handler = requestHandler;
exports.someText = "This is request handler code!"