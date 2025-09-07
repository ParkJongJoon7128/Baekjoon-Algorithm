const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const x_array = [];
const y_array = [];
for (let i = 0; i < 3; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  x_array.push(x);
  y_array.push(y);
}

let unique_x = 0;
let unique_y = 0;

for (let num of x_array) {
  unique_x ^= num;
}

for (let num of y_array) {
  unique_y ^= num;
}

console.log(`${unique_x} ${unique_y}`);
