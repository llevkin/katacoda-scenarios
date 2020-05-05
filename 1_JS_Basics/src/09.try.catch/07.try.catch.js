const fs = require('fs').promises;

async function read() {
    return await fs.readFile('/wrong/file/path');
}

(async () => {

    try {
        await read();
    }
    catch (e) {
        console.log('Catched: ' + e.message);
    }

})();