class A {

    one() {
        return 1;
    }

}

class B extends A {

    two() {
        return 2;
    }

}

let b = new B();

console.log(b.one(), b.two());