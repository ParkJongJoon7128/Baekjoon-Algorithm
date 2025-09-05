const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const N = Number(input);

console.log((2 ** N + 1) ** 2);
