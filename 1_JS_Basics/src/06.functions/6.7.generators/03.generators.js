function *inc(val) {
    ++val;
    yield val;
    ++val;
    yield val;
    return val;
}

function *pow(val) {
    val *= 2;
    yield val;
    val *= 2;
    yield val;
    return val;
}

function *wrap(val) {
    val = yield *inc(val);
    val = yield *pow(val);
    return val;
}

let gen = wrap(0);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());