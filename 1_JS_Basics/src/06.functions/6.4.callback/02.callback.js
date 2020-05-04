let result, array = [1, 2, 3];

array.forEach((item, i) => {
    console.log(item, i);
});

result = array.map(item => item + 1);

console.log(result);

result = array.reduce((memo, item) => {
    memo[`field.${item}`] = item;
    return memo;
}, {});

console.log(result);
