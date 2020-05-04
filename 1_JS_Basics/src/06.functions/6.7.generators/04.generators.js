function *generator() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

for (let i of generator()) {
    console.log(i);
}