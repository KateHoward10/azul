const server = require("express")();
const http = require("http").createServer(server);
const io = require("socket.io")(http);
const port = process.env.PORT || 3001;

io.on("connection", socket => {
  console.log("User " + socket.id + " connected");

  socket.on("disconnect", () => {
    console.log("User " + socket.id + "disconnected");
  });
});

http.listen(port, () => {
  console.log(`Listening on port ${port}`);
});