const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = [];
const arr2 = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i]);
}

for (let j = N + 1; j <= N + M; j++) {
  arr2.push(input[j]);
}

const set_arr = new Set(arr);
let count = 0;

arr2.forEach((a2) => {
  if (set_arr.has(a2)) {
    count++;
  }
});

console.log(count);
