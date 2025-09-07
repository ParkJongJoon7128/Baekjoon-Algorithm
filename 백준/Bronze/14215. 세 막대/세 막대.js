const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const arr = input.map(Number);

arr.sort((a, b) => a - b);

let a = arr[0];
let b = arr[1];
let c = arr[2];

if (a + b <= c) {
  c = a + b - 1;
}

console.log(a + b + c);
