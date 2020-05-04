const fs = require('fs');

fs.readFile(__filename, 'utf8', (error, data) => {
    console.log(data);
});