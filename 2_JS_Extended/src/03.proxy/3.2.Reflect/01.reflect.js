let proxy = new Proxy({
    test: 1
}, {

    get(ctx, field, ...args) {
        return Reflect.get(ctx, field, ...args);
    }

});

console.log(proxy.test);