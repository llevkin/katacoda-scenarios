let a, b, c, rest;

[a, b, ...rest] = [1, 2, 3, 4, 5];

console.log(a, b, rest);

[a, , c] = [1, 2, 3, 4, 5];

console.log(a, c);