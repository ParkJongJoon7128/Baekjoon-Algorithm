const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const arr = [];

for (let i = 1; i <= N; i++) {
  const n = input[i];
  arr.push(n);
}

arr.sort((a, b) => a - b);

for (let j = 0; j < N; j++) {
  console.log(arr[j]);
}
