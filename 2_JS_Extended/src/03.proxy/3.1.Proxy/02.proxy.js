function proxy(wrap) {
    return _proxify(wrap, { path: [] });
}

function _proxify(fn, data) {
    return new Proxy(fn, {

        get(fn, field, receiver) {
            if (Reflect.has(fn, field))
                return Reflect.get(fn, field, receiver);
            data.path.push(field);
            return _proxify(fn, data);
        },

        apply(fn, that, args) {
            return fn.call(that, data.path.join('.'), args);
        },

        has() {
            return true;
        },

    });
}

let obj = proxy((path, args) => console.log(path, args));

obj.a.b.c(1, 2, 3);