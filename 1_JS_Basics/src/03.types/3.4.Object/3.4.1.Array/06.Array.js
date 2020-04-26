let arr = new Array(4);

console.log(arr, arr.length);

console.log(arr.join('1'));

console.log('\nПустой массив можно итерировать:');
for (let value of arr)
    console.log(value);