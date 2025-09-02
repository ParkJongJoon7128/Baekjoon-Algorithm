const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const result = input[0] === "" ? 0 : input.length;

console.log(result);
