const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

const x_array = [];
const y_array = [];

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  x_array.push(x);
  y_array.push(y);
}

const width = Math.max(...x_array) - Math.min(...x_array);
const height = Math.max(...y_array) - Math.min(...y_array);

console.log(width * height);
