const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const N = Number(input[0]);
const K = Number(input[1]);

const arr = [];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    arr.push(i);
  }
}

arr.sort((a, b) => a - b);

if (arr.length < K) {
  console.log(0);
} else {
  console.log(arr[K - 1]);
}
