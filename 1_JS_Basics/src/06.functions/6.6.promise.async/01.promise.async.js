/* Зачем нужны обещания, callback-hell */
let fs   = require('fs'),
    zlib = require('zlib');

fs.readFile(__filename, (error, data) => {
    zlib.gzip(data, (error, data) => {
        fs.writeFile(__filename + '.gzip', data, error => {
            console.log('done!');
        });
    });
});
