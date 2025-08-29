const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const str = input[1]
  .split("")
  .map(Number)
  .reduce((a, c) => a + c, 0);

console.log(str);
