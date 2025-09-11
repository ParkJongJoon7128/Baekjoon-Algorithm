const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, k] = input[0].split(" ").map(Number);

// 76 85 93 98 100
const x = input[1].split(" ").map(Number);

// 100 98 93 85 76
x.sort((a, b) => a - b);

console.log(x[x.length - k]);
