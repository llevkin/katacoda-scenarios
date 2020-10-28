const amqp = require('amqplib');
const handler = require('./handler');
const config = require('../config.json');

let connection, channel;

async function onConsume(message) {
    let data;
    if (!message)
        return;
    data = JSON.parse(message.content);
    await handler(data);
    channel.ack(message);
}

(async () => {
    connection = await amqp.connect(config.rabbitmq.host);
    channel    = await connection.createChannel();
    console.log('connected to rabbit MQ');
    channel.consume(config.rabbitmq.queue, onConsume);
})();