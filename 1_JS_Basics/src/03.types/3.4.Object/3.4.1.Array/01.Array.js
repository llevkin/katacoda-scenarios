let arr = [1, 2, 3];

console.log(arr, arr.length);

console.log('\nИтерация, пример 1');
for (let i = 0; i < arr.length; i++)
    console.log(i, arr[i]);

console.log('\nИтерация, пример 2');
for (let value of arr)
    console.log(value);