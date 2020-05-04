let json = {
    "number": 1.23,
    "string": "test string",
    "boolean": true,
    "array": [1, 2, 3],
    "null": null,
    fu: function() {
        return 1;
    },
    inf: Infinity,
    nan: NaN,
    und: undefined,
};

let res = JSON.stringify(json);

console.log(res);