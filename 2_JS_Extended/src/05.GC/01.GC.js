const { create, memory } = require('./00.helpers');

let arr;

memory(`(GC) init:`);

arr = create();

memory(`(GC) array created, link exists:`);

arr = null;

memory(`(GC) link not exists:`);

