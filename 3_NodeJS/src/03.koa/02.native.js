const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello 02.native!');
});

server.listen(3000, '127.0.0.1', () =>
    console.log(`HTTP server listen on [${server.address().address}:${server.address().port}]`)
);