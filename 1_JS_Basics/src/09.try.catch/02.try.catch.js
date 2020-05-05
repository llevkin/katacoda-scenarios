try {
    notExistingFunction();
}
catch (e) {
    console.log(e);
    console.log(e.message);
    console.log(e.stack);
}
finally {
    console.log('finally!');
}