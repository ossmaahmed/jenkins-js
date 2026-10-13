const http = require("node:http");

const port = process.env.PORT || 3306;

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("Hello, World!\n");
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});
