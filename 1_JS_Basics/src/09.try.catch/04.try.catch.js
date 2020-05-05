function test() {
    try {
        notExistingFunction();
    }
    catch (e) {
        return e.message;
    }
    finally {
        console.log('finally!');
    }
}

console.log(test());