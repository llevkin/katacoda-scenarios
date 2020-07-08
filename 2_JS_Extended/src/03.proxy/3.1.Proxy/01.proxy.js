let proxy = new Proxy({}, {

    get(ctx, field) {
        return field;
    }

});

console.log(proxy.test);