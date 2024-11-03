const http = require('http'); // Import the 'http' module to create an HTTP server
const { on } = require('events'); // Import the 'events' module for event handling
const { log } = require('console'); // Import the 'console' module for logging
const routes = require('./routes');
// Create an HTTP server that handles incoming requests
const server = http.createServer(routes.handler);
log(routes.someText)
// Start the server and listen on port 3000
server.listen(3000, () => {
    console.log("Server is listening on port 3000"); // Log a message indicating the server is listening
});
