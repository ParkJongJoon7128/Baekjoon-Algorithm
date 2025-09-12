const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const set_arr = new Set(input[1].split(" ").map(Number));
const M = Number(input[2]);
const arr2 = input[3].split(" ").map(Number);

let result = "";

for (let i = 0; i < M; i++) {
  if (set_arr.has(arr2[i])) {
    result += 1 + " ";
  } else {
    result += 0 + " ";
  }
}

console.log(result);
