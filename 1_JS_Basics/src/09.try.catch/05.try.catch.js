let promise = new Promise((resolve, reject) => reject(new Error('Some error')));

promise
    .then(() => console.log('ok!'))
    .catch(e => console.log(`[${e.message}] catched!`))
    .finally(() => console.log('finally!'));