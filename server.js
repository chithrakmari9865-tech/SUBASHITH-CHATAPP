const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('නව පරිශීලකයෙක් සම්බන්ධ විය');

    socket.on('chat message', (data) => {
        io.emit('chat message', data);
    });

    socket.on('disconnect', () => {
        console.log('පරිශීලකයෙක් ඉවත් විය');
    });
});

server.listen(3000, () => {
    console.log('සර්වර් එක ක්‍රියාත්මකයි: http://localhost:3000');
});