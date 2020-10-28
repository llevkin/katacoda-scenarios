const mongodb = require('mongodb');
const config = require('../config');

let client, db;

(async () => {
    client = await mongodb.MongoClient.connect(config.mongo.host, { useUnifiedTopology: true });
    db     = await client.db();
})();

exports.upsert = data =>
    db.collection(config.mongo.collection).replaceOne({ _id: data._id }, data, { upsert: true });