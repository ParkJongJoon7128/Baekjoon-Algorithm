const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let sum = 0;
const max = Math.max(...arr);

for (let i = 0; i < N; i++) {
  sum += (arr[i] / max) * 100;
}

console.log(sum / N);
