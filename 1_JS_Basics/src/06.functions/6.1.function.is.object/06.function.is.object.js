function sum(a, b) {
    return a + b;
}

let binded = sum.bind(null, 1, 2);

console.log(binded());