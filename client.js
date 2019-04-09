//will replace telnet client
const net = require('net');

const client = net.createConnection(7890, '192.168.1.180', ()=> {
    console.log('connected!');
    client.write('hello i am a client');
});
