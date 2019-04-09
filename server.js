const net = require('net');

//every client is a socket. called socket in docs
const server = net.createServer(client=> {
    console.log('client connected!');
    client.on('data', data=> {
        console.log(data.toString());
    });
});

//number is the port. port can go up to 60000. dont go under 1050
server.listen(7890);
