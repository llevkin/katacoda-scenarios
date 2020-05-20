let a = Symbol('test'),
    b = {
        a: 'text',
        b: 'another text',
        [a]: 'some hidden text'
    };

console.log(b);
console.log(b[a]);

for (let field in b)
    console.log(field, b[field]);
