let res,
    exp = /^[abc]{1}\d{1}$/gm,
    str = `a1
b2
cb1
a12
n3
a2
b7`;

console.log(str);

while (res = exp.exec(str))
    console.log(res);