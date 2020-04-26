let a = 10n,
    b = 10,
    c = 1.5;

console.log(1, a == b, a === b);
console.log(2, a > c);
console.log(3, typeof a, typeof b);

try {
    console.log(4, b + a);
}
catch (e) {
    console.log(4, `Error: ${e.message}`);
}

console.log(5, BigInt(b) + a);