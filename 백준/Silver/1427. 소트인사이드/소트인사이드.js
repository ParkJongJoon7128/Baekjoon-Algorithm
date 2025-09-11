const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const N = input.split("").map(Number);

N.sort((a, b) => b - a);

console.log(N.join(""));
