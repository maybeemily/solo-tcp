const net = require('net');

const server = net.createServer(connectedClient=> {
    console.log('client connected!');

    connectedClient.on('data', data=> {
        connectedClient.write(`ECHO FROM SERVER: ${data}`);
    });
});

server.listen(7890);
