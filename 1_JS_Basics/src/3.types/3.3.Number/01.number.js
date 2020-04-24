let a = 1,
    b = 2;

console.log(a, b, a !== b);

a = Number(1);
b = Number(1);

console.log(a, b, a === b);

a = new Number(1);
b = new Number(1);

console.log(a, b, a === b);