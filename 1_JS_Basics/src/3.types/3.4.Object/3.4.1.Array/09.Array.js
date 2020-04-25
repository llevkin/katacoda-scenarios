/* Очистка массива */
let arr;

//1
arr = [1, 2, 3];

while (arr.length)
    arr.pop();

console.log(arr, arr.length);

//2
arr = [1, 2, 3];

arr.length = 0;

console.log(arr, arr.length);

//3
arr = [1, 2, 3];

arr = [];

console.log(arr, arr.length);