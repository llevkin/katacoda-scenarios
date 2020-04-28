let res,
    obj1 = { a: 1 },
    obj2 = { b: 2, c: 3 };

res = { ...obj1, ...obj2 };

console.log(res);