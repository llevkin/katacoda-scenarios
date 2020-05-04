function *inc(val) {
    while (true) {
        val = val + 1;
        yield val;
    }
}

let gen = inc(0);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());