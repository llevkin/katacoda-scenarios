const map = new Map();

map.set('test1', { value: 1 });
map.set('test2', { value: 2 });
map.set('test3', { value: 3 });

console.log(map.size);

for (let [key, val] of map)
    console.log(key, val);
