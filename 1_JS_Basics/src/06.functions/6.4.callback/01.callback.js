let result, array = [1, 2, 3];

function transform(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++)
        result.push(callback(array[i], i));
    return result;
}

result = transform(array, function(item, i) {
    return item + 1;
});

console.log(result);

result = transform(array, function(item, i) {
    return item * 2;
});

console.log(result);

result = transform(array, function(item, i) {
    return item * i;
});

console.log(result);

