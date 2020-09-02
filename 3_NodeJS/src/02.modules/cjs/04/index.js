let one1 = require('./one');
let one2 = require('./one');

delete require.cache[one1.id];

let one3 = require('./one');