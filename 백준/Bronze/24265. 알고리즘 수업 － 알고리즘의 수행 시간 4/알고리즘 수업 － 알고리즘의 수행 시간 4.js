const n = require("fs").readFileSync("/dev/stdin").toString().trim();

console.log(Number((n * (n - 1)) / 2));
console.log(2);
