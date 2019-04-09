const net = require('net');

//every client is a socket. called socket in docs
//clients are duplex streams
const server = net.createServer(connectedClient=> {
    console.log('client connected!');

    connectedClient.on('data', data=> {
        //when client writes a line, server does this: 
        connectedClient.write(`ECHO FROM SERVER: ${data}`);
    });
});

//number is the port. port can go up to 60000. dont go under 1050
server.listen(7890);
//this is listening to new connections that come in
