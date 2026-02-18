const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    const method = req.method;
    const url = req.url;

    const data = new Date().toString();  // fixed here

    const log = `new log - ${data} | ${method} | ${url}\n`;

    fs.appendFile("alog.txt", log, (err) => {   // fixed here
        if (err) console.log("Error writing file");
    });

    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Server working & request saved in alog.txt");
});

server.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
});