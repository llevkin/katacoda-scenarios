let symbol1 = Symbol('symbol1'),
    symbol2 = Symbol('symbol2');

let object = { [symbol1]: 1, [symbol2]: 2, };

let props = Object.getOwnPropertySymbols(object);

console.log(props);
