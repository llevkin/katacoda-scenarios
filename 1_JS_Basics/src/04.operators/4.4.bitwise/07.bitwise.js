let d,
    a = -0B10,
    b = 1;

c = a >> b;

console.log(a.toString(2), c.toString(2));
console.log(a, c);

c = a >>> b;

console.log(a.toString(2), c.toString(2));
console.log(a, c);