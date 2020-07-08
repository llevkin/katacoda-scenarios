const set = new Set();

set.add({ a: 1 });
set.add(1);
set.add(true);
set.add('test');

for (let item of set)
    console.log(item);