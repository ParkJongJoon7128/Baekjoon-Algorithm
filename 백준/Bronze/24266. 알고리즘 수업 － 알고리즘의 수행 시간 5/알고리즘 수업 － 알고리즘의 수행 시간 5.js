const n = BigInt(require("fs").readFileSync("/dev/stdin").toString().trim());

console.log((n * n * n).toString().replace("n", ""));
console.log(3);
