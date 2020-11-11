require('../src/service_2');
const config = require('../src/config.json');
const amqp = require('amqplib');
const { assert } = require('chai');
const { Client: ElasticClient } = require('@elastic/elasticsearch');
const { Client: Pg } = require('pg');
const mongodb = require('mongodb');

const data = { _id: 1, firstName: 'Vasya', lastName: 'Pupkin', phone: '8-(999)-123-00-01' };

describe('service_2', function() {

    let channel, elastic, mongo, pg;

    async function connect() {
        let connect;

        elastic = new ElasticClient(config.elastic.options);
        await elastic.ping();

        connect = await mongodb.MongoClient.connect(config.mongo.host, { useUnifiedTopology: true });
        mongo   = await connect.db();

        pg      = new Pg(config.postgres.options);
        await pg.connect();

        connect  = await amqp.connect(config.rabbitmq.host);
        channel  = await connect.createChannel();
    }

    before(done => {
        connect().then(() => {
            channel.sendToQueue(config.rabbitmq.queue, Buffer.from(JSON.stringify(data)));
            setTimeout(done, 200);
        });
    });

    it('elastic', async () => {
        let res = await elastic.get({
            index: config.elastic.index,
            id: data._id,
        });
        for (let field in res.body._source)
            assert.equal(data[field], res.body._source[field]);
    });

    it('mongodb', async () => {
        let result = await mongo.collection(config.mongo.collection).findOne({ _id: data._id });
        assert.deepEqual(result, data);
    });

    it('postrgesql', async () => {
        let result = await pg.query('SELECT * FROM catalog WHERE id = $1', [data._id]);
        assert.equal(result.rows[0].id, data._id);
        assert.equal(result.rows[0].firstname, data.firstName);
        assert.equal(result.rows[0].lastname, data.lastName);
        assert.equal(result.rows[0].phone, data.phone);
    });

});