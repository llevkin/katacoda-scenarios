function inherits(Constructor, SuperConstructor) {
    Constructor.super_ = SuperConstructor;
    Object.setPrototypeOf(Constructor.prototype, SuperConstructor.prototype);
}

function Parent() {
    this.a = 1;
}

Parent.prototype.test = function () {
    return 'test1';
}

Parent.prototype.test1 = function () {
    return 'test1';
}

function Child() {
    Child.super_.apply(this);
    this.b = 2;
}

Child.prototype.test = function () {
    return Child.super_.prototype.test() + ' ' + 'test2';
}

Child.prototype.test2 = function () {
    return 'test2';
}

inherits(Child, Parent);

let obj = new Child();

console.log(obj);
console.log(obj.test1());
console.log(obj.test2());
console.log(obj.test());