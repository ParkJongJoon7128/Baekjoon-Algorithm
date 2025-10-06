const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [M, N] = input[0].split(" ").map(Number);
const arr = [];

for (let i = M; i <= N; i++) {
  if (i < 2) {
    continue;
  }

  let isPrime = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    arr.push(i);
  }
}

console.log(arr.join("\n"));
