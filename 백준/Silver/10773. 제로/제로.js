const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const K = Number(input[0]);
const arr = [];

for (let i = 1; i <= K; i++) {
  const value = Number(input[i]);

  if (value === 0) {
    arr.pop();
  } else {
    arr.push(value);
  }
}

console.log(arr.reduce((a, c) => a + c, 0));
