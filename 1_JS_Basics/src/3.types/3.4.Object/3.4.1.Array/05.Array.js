let arr = [1, 2, 3];

console.log('\nИтерация, метод for');
for (let i = 0; i < arr.length; i++)
    console.log(i, arr[i]);

console.log('\nИтерация, метод for-of');
for (let value of arr)
    console.log(value);