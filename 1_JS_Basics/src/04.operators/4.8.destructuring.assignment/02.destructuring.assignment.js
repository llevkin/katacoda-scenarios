let a, b, rest;

({ a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 });

console.log(a, b, rest);