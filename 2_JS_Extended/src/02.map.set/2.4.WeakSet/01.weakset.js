const weakset = new WeakSet();
const a = { a: 1 };
const b = { b: 1 };
const c = { c: 1 };

weakset.add(a);
weakset.add(b);
weakset.add(c);

console.log(weakset.has(a), weakset.has(b), weakset.has(c));