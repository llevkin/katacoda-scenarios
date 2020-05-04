function timeout(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function run() {
    console.log('wait 1 sec...');
    await timeout(1000);
    console.log('wait 2 sec...');
    await timeout(1000);
    console.log('done');
}

run();