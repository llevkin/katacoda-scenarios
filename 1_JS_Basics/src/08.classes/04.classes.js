class A {

    static method() {
        return 'Hello world!';
    }

    static prop  = 1;
    prop         = 2;
    #privateProp = 3;

    get private() {
        return this.#privateProp;
    }
}

let a = new A();

console.log(A.method());
console.log(A.prop);
console.log(a.prop);
console.log(a.private);
// console.log(a.#privateProp);