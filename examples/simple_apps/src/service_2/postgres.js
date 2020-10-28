const { Client } = require('pg');
const config = require('../config');

let client;

(async () => {
    client = new Client(config.postgres.options);
    await client.connect();
})();

exports.upsert = data =>
    client.query(`
        INSERT INTO ${config.postgres.table}
            (id, firstname, lastname, phone)
        VALUES 
            ($1, $2, $3, $4)
        ON CONFLICT ON CONSTRAINT catalog_pk DO
        UPDATE SET firstname = $2, lastname = $3, phone = $4; 
    `, [data._id, data.firstName, data.lastName, data.phone]);