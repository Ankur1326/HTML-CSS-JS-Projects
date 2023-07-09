const http = require("http")

// Create a server Object
http.createServer(function(req, res) {
    if (req.url === "/") {
        res.write("<h1>I AM Happy To Learn Full Stack Web development From PW Skills!</h1>") // write a responsive to the client
    }
    res.end() //end the responsse
}).listen(3456)

console.log("The HTTP Server is running on port 3456");
// Use http://localhost:3456/ on the browser