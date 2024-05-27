const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
// Node server
const server = require('http').createServer(app);

module.exports.io = require('socket.io')(server);
require('./sockets/socket');

const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
    if (err) {
        console.log('There was an error starting the server:', err);
        return;
    }    
    console.log('Server is running on port 3000');
});