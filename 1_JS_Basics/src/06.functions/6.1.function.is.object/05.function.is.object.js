function sum(a, b) {
    return a + b;
}

console.log(sum.apply(null, [1, 2]));