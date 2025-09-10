const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = Number(input[0]);

let count = 0;

while (1) {
  if (N % 5 === 0) {
    console.log(N / 5 + count);
    break;
  }

  if (N < 0) {
    console.log(-1);
    break;
  }

  count++;
  N -= 3;
}
