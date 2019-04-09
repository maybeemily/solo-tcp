const fs = require('fs');

const textStream = fs.createWriteStream('./spot.txt');
textStream.write('i am some data');
textStream.end();


const ws = fs.createWriteStream('./spot.json', {
    flags: 'a'
});

ws.write('{');
ws.write('\n\t"name": "spot",');
ws.write('\n\t');
ws.write('\n\t"age": 15,');
ws.write('\n\t');
ws.write('\n\t"weight": "13 lbs"');
ws.write('\n');
ws.write('}');
ws.write('\n');

ws.end();
