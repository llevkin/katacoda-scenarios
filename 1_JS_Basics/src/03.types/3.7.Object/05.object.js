/* Итерация свойств */
let b = { a: 1, b: 2, c: 3 };

for (let field in b)
    console.log(field, b[field]);
