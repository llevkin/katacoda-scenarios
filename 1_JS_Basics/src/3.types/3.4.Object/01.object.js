let b, a = {};

console.log(a);

a = {
    str: 'value',
    num: 10
};

console.log(a);

a = {

    _value: 0,

    method: function() {
        return 1;
    },

    get value() {
        return this._value;
    },

    set value(value) {
        this._value = value;
    },

};

console.log(a);
console.log(a.method());
console.log(a.value);
a.value = 100;
console.log(a.value);

a = new Object();

a.field1 = 1;
a.field2 = 'test';

console.log(a);

a = { a: 1 };
b = { a: 1 };

console.log(a === b);
