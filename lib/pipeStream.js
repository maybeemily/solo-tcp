const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md', {
    encoding: 'utf8',
    highWaterMark: 64 * 1028
});

const ws = fs.createWriteStream('./1_streams-copy-2.md');

rs.pipe(ws);
