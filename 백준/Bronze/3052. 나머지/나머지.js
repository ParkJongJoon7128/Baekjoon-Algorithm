const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const array = input.map((i) => i % 42);

const set_array = [...new Set(array)];

console.log(set_array.length);
