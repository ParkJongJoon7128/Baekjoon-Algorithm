const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = [];

for (let i = 0; i < 5; i++) {
  arr.push(Number(input[i]));
}

arr.sort((a, b) => a - b);
let sum = 0;

for (let j = 0; j < 5; j++) {
  sum += arr[j];
}

const avg = sum / arr.length;
const mid = arr[Math.floor(arr.length / 2)];

console.log(avg);
console.log(mid);
