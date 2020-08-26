function tick(fn, title, count = 10) {
    if (count > 0)
        fn(() => console.log(title) || tick(fn, title, --count));
}
tick(process.nextTick, 'process.nextTick');
tick(setImmediate, 'setImmediate');
tick(setTimeout, 'setTimeout');
console.log('опрос!');
