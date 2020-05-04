let promise = new Promise((resolve, reject) => {
    reject(new Error('Some error!'));
});

promise.catch(err => console.log(err));