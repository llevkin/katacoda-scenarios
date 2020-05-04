let fs   = require('fs').promises,
    zlib = require('zlib'),
    util = require('util');

let gzip = util.promisify(zlib.gzip);

async function run() {
    let data;
    data = await fs.readFile(__filename);
    data = await gzip(data);
    await fs.writeFile(__filename + '.gzip', data);
}

run();