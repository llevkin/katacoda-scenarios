async function *asyncGenerator() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

(async () => {

    let res, gen = asyncGenerator();
    res = await gen.next();
    console.log(res);
    res = await gen.next();
    console.log(res);
    res = await gen.next();
    console.log(res);
    res = await gen.next();
    console.log(res);

})();

