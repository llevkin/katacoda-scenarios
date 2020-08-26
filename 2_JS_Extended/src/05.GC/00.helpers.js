console.log(`Node version: ${process.version}`);

exports.create = () => {
    let data = [];
    for (let i = 0; i < 1e3; i++)
        data.push(new Array(1e4).join('some big data'));
    return data;
};

exports.memory = text => {
    global.gc();
    console.log(text + ' ' + (process.memoryUsage().heapUsed / Math.pow(1024, 2)).toFixed(2) + 'mb');
};