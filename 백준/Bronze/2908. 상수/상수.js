const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let A = Number(String(input[0]).split("").reverse().join(""));
let B = Number(String(input[1]).split("").reverse().join(""));

console.log(A > B ? A : B);
