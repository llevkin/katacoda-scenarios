require('../src/service_1');
const config = require('../src/config.json');
const amqp = require('amqplib');
const { assert } = require('chai');
const request = require('superagent');

const data = { _id: 1, firstName: 'Vasya', lastName: 'Pupkin', phone: '8-(999)-123-00-01' };
const host = `http://localhost:${config.koa.port}`;

describe('service_1', function() {

    let channel;

    before(async () => {
        let connection = await amqp.connect(config.rabbitmq.host);
        channel = await connection.createChannel();
    });

    it('GET /alive', async () => {
        let res = await request.get(`${host}/alive`);
        assert.equal(res.body, 1);
    });

    it('PUT /catalog', done => {
        channel.consume(config.rabbitmq.queue, message => {
            if (!message)
                return;
            assert.deepEqual(data, JSON.parse(message.content));
            channel.ack(message);
            done();
        });
        request
            .put(`${host}/catalog`)
            .send(data)
            .then(res => {
                assert.deepEqual(data, res.body);
            });
    });

});