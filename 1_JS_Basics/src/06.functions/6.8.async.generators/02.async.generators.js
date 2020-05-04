async function *asyncGenerator() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

(async () => {

    for await (let item of asyncGenerator()) {
        console.log(item);
    }

})();

