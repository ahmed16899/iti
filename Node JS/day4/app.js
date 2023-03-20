const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

const users = {}

const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('new-user', name => {
    users[socket.id] = name
    socket.broadcast.emit('user-connected', name)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', {msg , name: users[socket.id]});
  });
});

server.listen(port, () => {
  console.log('listening on *:3000');
});
