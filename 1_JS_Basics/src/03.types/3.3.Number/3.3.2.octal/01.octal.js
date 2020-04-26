let a = 0o10,
    b = 0o11;

console.log(a, b);

let c = 010; // Legacy, deprecated, octal literals with prefix '0' are not allowed. Use '0o' prefix instead

console.log(c === a);