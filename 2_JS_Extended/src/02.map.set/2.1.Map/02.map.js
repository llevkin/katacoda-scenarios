const map = new Map();
const a = { test: 1 };
const b = { test: 2 };

map.set(a, b);

console.log(map.has(a));

console.log(map.get(a));