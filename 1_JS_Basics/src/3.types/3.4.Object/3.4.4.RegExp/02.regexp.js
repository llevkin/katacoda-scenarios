let exp = /^[abc]{1}(\d+)$/,
    res1 = 'a1'.match(exp),
    res2 = 'ba1'.match(exp),
    res3 = 'c'.match(exp),
    res4 = 'c123'.match(exp);

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);