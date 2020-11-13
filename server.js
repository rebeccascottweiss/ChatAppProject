const port = 8000; 
const express = require("express"); 
const app = express(); 

const server = app.listen(port, ()=>
    console.log(`The server is all fired up on port ${port}`)
); 

const io = require("socket.io")(server); 

io.on("connection", socket => {
    console.log("nice to meet you. (shake hand)");
    socket.emit("hello world"); 
}); 