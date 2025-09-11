const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i]));
}

arr.sort((a, b) => a - b);

console.log(arr.join("\n"));
