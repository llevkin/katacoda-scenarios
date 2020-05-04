function *generator() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

let gen = generator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());