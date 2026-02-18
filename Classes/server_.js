const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const logData = `${new Date().toISOString()} | ${req.method} | ${req.url}\n`;

  fs.appendFile("log.txt", logData, (err) => {
    if (err) console.log("Error writing log");
  });

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Request Logged Successfully");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
