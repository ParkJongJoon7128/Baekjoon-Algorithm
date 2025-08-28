const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const max = Math.max(...input);
const idx = input.indexOf(max);

console.log(max);
console.log(idx + 1);
