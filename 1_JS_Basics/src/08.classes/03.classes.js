class A {

    test() {
        return 1;
    }

}

class B extends A {

    test() {
        return super.test();
    }

}

let b = new B();

console.log(b.test());