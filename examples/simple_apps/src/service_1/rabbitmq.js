const amqp = require('amqplib');
const config = require('../config.json');

let connection, channel;

(async () => {
    connection = await amqp.connect(config.rabbitmq.host);
    channel    = await connection.createChannel();
    console.log('connected to rabbit MQ');
})();

exports.send = data =>
    channel.sendToQueue(config.rabbitmq.queue, Buffer.from(JSON.stringify(data)));