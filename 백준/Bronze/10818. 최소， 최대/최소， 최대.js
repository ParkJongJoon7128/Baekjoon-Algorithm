const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let max = arr[0];
let min = arr[0];

for (let i = 0; i < N; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}

for (let i = 0; i < N; i++) {
  if (min > arr[i]) {
    min = arr[i];
  }
}

console.log(`${min} ${max}`);
