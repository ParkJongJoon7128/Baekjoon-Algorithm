const [N, input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = input.trim().split(" ").map(Number);
let count = 0;

for (let i = 0; i < N; i++) {
  if (arr[i] < 2) {
    continue;
  }

  let isPrime = true;

  for (let j = 2; j * j <= arr[i]; j++) {
    if (arr[i] % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    count++;
  }
}

console.log(count);
