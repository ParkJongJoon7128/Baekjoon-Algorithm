const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const str = input[1].split("").map(Number);

let sum = 0;

for (let i = 0; i < N; i++) {
  sum += str[i];
}

console.log(sum);
