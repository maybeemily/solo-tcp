const fs = require('fs');

//createReadStream's job is to emit data for each stream you give it/it finds
//to not get a buffer, add encoding.
const rs = fs.createReadStream('./1_streams.md', {
    encoding: 'utf8',
    highWaterMark: 64 * 1028 //how much of a chunk you want it to process at once. 
    //if you give this 1 it will give 1 letter at a time
    //default is 64 bytes. files larger than this will arrive in chunks unless otherwise specified
});

//the data event. 'data' is not banana! specific event for streams.
rs.on('data', data => {
    console.log(data);
});
