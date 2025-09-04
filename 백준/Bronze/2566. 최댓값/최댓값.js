let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = [];

for (let i = 0; i < 9; i++) {
  arr.push(input[i].split(" ").map(Number));
}

let max = arr[0][0];
let max_row = 0;
let max_col = 0;

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (max <= arr[i][j]) {
      max = arr[i][j];
      max_row = i + 1;
      max_col = j + 1;
    }
  }
}

console.log(max);
console.log(max_row, max_col);
