//instead of a little dude taking a bucket from
//our stream to our data lake, and pouring it in
//bucket by bucket (chunk by chunk) we are going to build
//a pipeline between our stream and lake.
//The flow of data will be automatically managed so 
//that the destination Writable stream is not overwhelmed 
//by a faster Readable stream.


const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md', {
    encoding: 'utf8',
    highWaterMark: 64 * 1028
});

const ws = fs.createWriteStream('./1_streams-copy-2.md');

rs.pipe(ws);

/*
can also be written(with multiple pipes)
rs
    .pipe(ws);
    .pipe(another stream);

shortcut for:

rs.pipe(ws);
ws.pipe(another stream);
*/

//don't have to call the end method! pipe will do it for us
