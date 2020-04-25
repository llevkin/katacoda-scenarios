/* Динамическое задание свойств */
let b, a = { field1: 1 };

a.field2 = true;
a.field3 = 'test';

console.log('\nДинамическое задание свойств:');
console.log(a);

/* Сравнение объектов */
a = { a: 1 };
b = { a: 1 };

console.log('\nСравнение объектов:');
console.log(a === b);

/* Итерация свойств */
b = { a: 1, b: 2, c: 3 };

for (let field in b)
    console.log(field, b[field]);
