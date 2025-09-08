const n = require("fs").readFileSync("/dev/stdin").toString().trim();

console.log(
  ((BigInt(n) * BigInt(n - 1) * BigInt(n - 2)) / BigInt(6))
    .toString()
    .replace("n", "")
);
console.log(3);
