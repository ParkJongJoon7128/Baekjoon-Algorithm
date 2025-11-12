const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = Number(input[0]);

if (N === 0 || N === 1) {
  console.log(1);
} else {
  for (let i = N - 1; i >= 1; i--) {
    N *= i;
  }

  console.log(N);
}
