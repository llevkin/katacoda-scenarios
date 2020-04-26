let a = 'single-quoted',
    b = "double-quoted",
    c = `backticks`;

console.log(1, a, b, c);

let template = `template: ${a}, ${b}, ${c}`;

console.log(2, template);

let concatenate = a + ' | ' + b + ' | ' + c;

console.log(3, concatenate);

// New line:
console.log(4, '\na \nb \nc');

// New line with backticks:
console.log(5, `
a
b
c
`);