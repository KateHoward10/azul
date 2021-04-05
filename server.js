const server = require("express")();
const http = require("http").createServer(server);
const io = require("socket.io")(http);
const port = process.env.PORT || 3001;

let gameId;
let games = {};
let players = gameId ? games[gameId] : [];
let name;

io.on("connection", socket => {
  console.log("User " + socket.id + " connected");

  socket.on("updateGame", data => {
    socket.broadcast.to(gameId).emit("gameUpdated", data);
  });

  socket.on("joinGame", (username, id) => {
    gameId = id;
    if (!games[gameId]) players = [];
    socket.join(gameId);
    name = username;
    players = [...players, username];
    games[gameId] = players;
    io.to(gameId).emit("updatePlayers", players);
  });

  socket.on("disconnect", () => {
    console.log("User " + socket.id + " disconnected");
  });
});

http.listen(port, () => {
  console.log(`Listening on port ${port}`);
});