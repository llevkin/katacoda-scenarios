let fs   = require('fs'),
    zlib = require('zlib');

function read(file, encoding = 'utf8') {
    return new Promise((resolve, reject) => {
        fs.readFile(file, encoding, (error, data) => {
            if (error)
                return void reject(error);
            resolve(data);
        });
    });
}

function gzip(data) {
    return new Promise((resolve, reject) => {
        zlib.gzip(data, (error, res) => {
            if (error)
                return void reject(error);
            resolve(res);
        });
    });
}

function write(filename, data, encoding = 'utf8') {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, encoding, error => {
            if (error)
                return void reject(error);
            resolve('done!');
        });
    });
}

read(__filename)
    .then(data => gzip(data))
    .then(data => write(__filename + '.gzip', data))
    .then(res => console.log(res));