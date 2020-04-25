let arr = [];

arr.push(1); // быстрее

console.log(arr);

arr.push(2, 3);

console.log(arr);

arr.unshift(4); // медленнее

console.log(arr);

arr.unshift(5, 6);

console.log(arr);