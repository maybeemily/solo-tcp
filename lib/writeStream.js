const fs = require('fs');

const textStream = fs.createWriteStream('./spot.txt');
textStream.write('i am some data');
textStream.end();


const ws = fs.createWriteStream('./spot.json', {
    flags: 'a' //will append to the same file
});

//const dog = { name: 'spot', age: 5 };

//write method lets us write a chunk to the file. can have multiple writes in a file.
//ws.write(dog);
ws.write('{');
ws.write('\n\t"name": "spot",');
ws.write('\n\t');
ws.write('\n\t"age": 15,');
ws.write('\n\t');
ws.write('\n\t"weight": "13 lbs"');
ws.write('\n');
ws.write('}');
ws.write('\n');

//lets the stream know that we are done writing.
ws.end();
