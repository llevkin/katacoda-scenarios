const map = new Map();
const a = { a: 1 };
const b = 1;

map.set(a, b);

console.log(map.has(a));

console.log(map.get(a));