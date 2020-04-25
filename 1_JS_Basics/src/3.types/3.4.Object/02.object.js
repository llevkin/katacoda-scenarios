/* Создание объектов со свойствами, методами, геттерами и сеттерами */
let a = {

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

console.log('\nСоздание объектов со свойствами, методами, геттерами и сеттерами:');
console.log(a);
console.log(a.method());
console.log(a.value);
a.value = 100;
console.log(a.value);