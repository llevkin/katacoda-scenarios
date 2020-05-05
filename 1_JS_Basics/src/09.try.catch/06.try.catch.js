let promise = new Promise((resolve, reject) => reject(new Error('Some error')));

promise
    .then(() => console.log('ok!'))
    .finally(() => console.log('finally!'));

setTimeout(() => {
    console.log('Hello world!');
}, 1000);