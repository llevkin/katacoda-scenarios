let a = 'Hello world',
    b = 'Hello world';

console.log(1, a, b, a === b);

a = String('Hello world');
b = String('Hello world');

console.log(2, a, b, a === b);

a = new String('Hello world'),
b = new String('Hello world');

console.log(3, a === b);