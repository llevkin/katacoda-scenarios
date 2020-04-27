// Warning! Node v14 required!
let a, b, c, d, e,
    object = {
        a: 10,
        b: false,
        c: undefined,
        d: null,
        e: NaN,
    };

a = object.a || 1;
b = object.b || true;
c = object.c || 2;
d = object.d || 3;
e = object.e || 4;

console.log(a, b, c, d, e);

a = object.a ?? 1;
b = object.b ?? true;
c = object.c ?? 2;
d = object.d ?? 3;
e = object.e ?? 4;

console.log(a, b, c, d, e);