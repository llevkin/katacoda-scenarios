const http = require('http');

const server = new http.Server();

server.on('request', (req, res) => {
    res.end('Hello 01.native!');
});

server.listen(3000, '127.0.0.1', () =>
    console.log(`HTTP server listen on [${server.address().address}:${server.address().port}]`)
);