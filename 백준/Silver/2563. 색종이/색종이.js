let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const arr = Array.from(Array(100), () => Array(100).fill(0));

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  for (let j = x; j < x + 10; j++) {
    for (let k = y; k < y + 10; k++) {
      arr[j][k] = 1;
    }
  }
}

let result = 0;

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (arr[i][j] === 1) {
      result += 1;
    }
  }
}

console.log(result);
