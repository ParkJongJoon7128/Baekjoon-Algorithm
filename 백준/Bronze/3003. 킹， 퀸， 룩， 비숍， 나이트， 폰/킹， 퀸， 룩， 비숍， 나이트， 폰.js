const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const chess = [1, 1, 2, 2, 2, 8];
const array = [];

for (let i = 0; i < input.length; i++) {
  array.push(chess[i] - input[i]);
}

console.log(array.join(" "));
