const mongo = require('./mongo');
const elastic = require('./elastic');
const postgres = require('./postgres');

module.exports = async data => {
    await Promise.all([
        mongo.upsert(data),
        elastic.upsert(data),
        postgres.upsert(data),
    ]);
};