const express = require("express");
const app = express();
const http = require("http").createServer(app);

const PORT = process.env.PORT || 5700;

app.use(express.static("public"));
app.set("view engine", "ejs");

http.listen(PORT, () => {
  console.log(`Running server on port__${PORT}`);
});

app.get("/", (req, res) => {
  res.render("index");
});

// Socket
const io = require("socket.io")(http);
io.on('connection', (socket) => {
    console.log('Connected..');
    socket.on('message', (msg) => {
      socket.broadcast.emit('message',msg)
    })
})





