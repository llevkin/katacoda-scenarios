let a = {

    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }

};

for (let i of a)
    console.log(i);