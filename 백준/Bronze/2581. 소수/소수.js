const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const M = Number(input[0]);
const N = Number(input[1]);

const arr = [];
for (let i = M; i <= N; i++) {
  if (i < 2) {
    continue;
  }

  let isPrime = true;
  for (let j = 2; j * j <= i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    arr.push(i);
  }
}

const sum = arr.reduce((a, c) => a + c, 0);
const min = Math.min(...arr);

if (arr.length === 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(min);
}
