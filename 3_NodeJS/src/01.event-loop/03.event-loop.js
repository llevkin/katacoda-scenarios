let net = require('net');

let server = new net.Server();
let socket = new net.Socket();

server.on('connection', socket => {
    console.log('Socket connected!');
    socket.write('Hello world!');
});

socket.on('data', data => {
    console.log(data.toString('utf8'));
    socket.end();
});

socket.on('close', () => {
    console.log('callback\'и событий close');
    process.exit();
});

server.listen(3000);
socket.connect(3000);

console.log('Опрос');

function immediate(i) {
    setImmediate(() => {
        console.log(`Проверка ${i}`);
        immediate(++i);
    });
}
immediate(0);

setInterval(() => console.log('Таймеры'));
process.nextTick(() => console.log('process.nextTick'));