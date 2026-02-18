const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const log = `${new Date().toISOString()} | ${req.method} | ${req.url}\n`;
  fs.appendFile("log.txt", log, () => {});
  res.end("Logged");
});

server.listen(3000);
