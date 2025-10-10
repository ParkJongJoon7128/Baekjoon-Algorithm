const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
const arr = input.slice(1).map(Number);
const result = [];

const max = Math.max(...arr);

const isPrime = Array(max + 1).fill(true);
isPrime[0] = false;
isPrime[1] = false;

for (let i = 2; i * i <= max + 1; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= max; j += i) {
      isPrime[j] = false;
    }
  }
}

for (let a of arr) {
  let count = 0;

  for (let i = 2; i <= a / 2; i++) {
    if (isPrime[i] && isPrime[a - i]) {
      count++;
    }
  }

  result.push(count);
}

console.log(result.join("\n"));
