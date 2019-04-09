//will replace telnet client
const net = require('net');
//command line tool that when we type a command it will fire an event.
//beginnings of command line application.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});

//three way handshake. 
const connectionToServer = net.createConnection(7890, '192.168.1.180', ()=> {
    console.log('connected!');

    rl.prompt();
    //listening to line event - triggers sending the line to the server
    rl.on('line', line=> {
    //after getting it, we print it then read prompt.
    //this is a client of the server! 
        connectionToServer.write(line);
        rl.prompt();
    });
});

//when server sends back data it will trigger this event
connectionToServer.on('data', data=> {
    console.log(`\n${data.toString()}`);
    rl.prompt();
});
