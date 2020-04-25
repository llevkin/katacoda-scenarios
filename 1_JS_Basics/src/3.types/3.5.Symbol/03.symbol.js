let a = Symbol.for('my.global.symbol');

console.log(a, Symbol.for('my.global.symbol'));

console.log(a === Symbol.for('my.global.symbol'));