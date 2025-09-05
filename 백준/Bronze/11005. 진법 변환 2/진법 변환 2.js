const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const N = Number(input[0]);
const B = Number(input[1]);

console.log(N.toString(B).toUpperCase());
