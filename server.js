net = require('net');

var clients = [];

net.createServer(function (socket) {

    socket.name = socket.remoteAddress + ":" + socket.remotePort
    clients.push(socket);
    socket.write("Welcome " + socket.name + "\n");
    socket.write(socket.name + " joined the chat\n", socket);

    socket.on('data', function (data) {
        socket.write(socket.name + "> " + data);
        console.log(socket.name + "> " + data);
    });

}).listen(5000);

console.log("Chat server running at port 5000\n");