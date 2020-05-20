let res,
    str = '123abc123',
    exp = /abc/;

res = exp.test(str);

console.log(exp, res);