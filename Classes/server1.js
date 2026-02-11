const http = require("http");git rm -r --cached node_modules


const server = http.createServer((req, res) => {

    const method = req.method;
    const url = req.url;

    console.log("URL:", url);
    console.log("Method:", method);

    if (url === "/" && method === "GET") {
        res.end("Home Page");
    } 
    else if (url === "/about" && method === "GET") {
        res.end("About Page");
    } 
    else {
        res.statusCode = 404;
        res.end("404 Page Not Found");
    }

});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
