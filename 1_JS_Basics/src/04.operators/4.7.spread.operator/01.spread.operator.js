let res, args = [1, 2, 3];

function sum(x, y, z) {
  return x + y + z;
}

res = sum(...args);

console.log(res);