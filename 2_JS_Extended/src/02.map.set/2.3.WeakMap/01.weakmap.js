const weakmap = new WeakMap();
const a = { a: 1 };
const b = { b: 1 };

weakmap.set(a, b);
weakmap.set(b, a);

console.log(weakmap.get(a), weakmap.get(b));