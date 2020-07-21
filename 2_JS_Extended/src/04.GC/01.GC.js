let i    = 0;
let arr  = [];
let wait = time => new Promise(resolve => setTimeout(resolve, time));

function add(value) {
    arr.push(value);
}

function memory(text) {
    global.gc();
    console.log(text + ' ' + (process.memoryUsage().heapUsed / Math.pow(1024, 2)).toFixed(2) + 'mb');
}

memory('init:');

for (; i < 1e3; i++)
    add(new Array(10000).join('some big data'));

memory(`(GC) link exists [items: ${i}]:`);

arr = null;

memory(`(GC) link not exists [items: ${i}]:`);

