const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = [];
const arr2 = [];
const result = [];
let count = 0;

for (let i = 1; i <= N; i++) {
  arr.push(input[i]);
}

const set_arr = new Set(arr);

for (let j = N + 1; j <= N + M; j++) {
  arr2.push(input[j]);
}

for (let a of arr2) {
  if (set_arr.has(a)) {
    count++;
    result.push(a);
  }
}

result.sort();

console.log(count);
console.log(result.join("\n"));
