const { Client } = require('@elastic/elasticsearch');
const config = require('../config');

let client;

(async () => {
    client = new Client(config.elastic.options);
    await client.ping();
})();

exports.upsert = data =>
    client.update({
        index: config.elastic.index,
        id: data._id,
        body: {
            doc_as_upsert: true,
            doc: {...data, ...{_id: undefined}},
        }
    });