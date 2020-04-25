let exp = /[abc]{1}\d+/igm;

res = exp.test(str);

console.log(exp, res);