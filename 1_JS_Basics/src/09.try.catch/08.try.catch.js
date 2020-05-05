const fs = require('fs').promises;

async function read() {
    fs.readFile('/wrong/file/path');
    return 'ok!';
}

(async () => {

    try {
        await read();
    }
    catch (e) {
        console.log('Catched: ' + e.message);
    }

})();