const http = require("http");
const webSocket = require("ws");
const server = http.createServer();
const ws = new webSocket.Server({ server });

ws.on("headers", (headers, req) => {
  console.log(headers);
});

ws.on("connection", (socket, req) => {
  socket.on("message", (data) => {
    console.log(data.toString());
  });
  socket.send("hello client! welcom to server!");
});
ws.on("error", (err) => {
  console.log(err.message);
});

ws.on("close", () => {
    console.log("one client has been closed")
})
server.listen(3000, (err, res) =>
  console.log("run on port " + "localhost:3000")
);
