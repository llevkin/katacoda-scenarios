const weakmap = new WeakMap();
const a = { a: 1 };

weakmap.set(a, 'test');

console.log(weakmap.get(a));