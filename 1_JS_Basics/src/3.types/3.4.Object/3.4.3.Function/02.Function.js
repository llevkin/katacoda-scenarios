function myFunc(text) {
    return `Hello World ${text}!`;
}

myFunc.test = 123;

console.log(myFunc);
console.log(myFunc.test);