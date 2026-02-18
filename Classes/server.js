const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === "/") {
        res.end("Home Page");
    } else if (url === "/about") {
        res.end("About Page");
    } else {
        res.end("404 Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
