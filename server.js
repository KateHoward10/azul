const server = require("express")();
const http = require("http").createServer(server);
const io = require("socket.io")(http);

io.on("connection", function (socket) {
    console.log("User " + socket.id + "connected");
    
    socket.on("disconnect", function () {
        console.log("User " + socket.id + "disconnected");
    });
});

http.listen(3000, function () {
    console.log("Server started!");
});