const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.pop();

const max = Math.max(...input) * 2;
const isPrime = new Array(max + 1).fill(true);

isPrime[0] = false;
isPrime[1] = false;

for (let i = 2; i <= Math.sqrt(max); i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= max; j += i) {
      isPrime[j] = false;
    }
  }
}

const result = [];

for (const n of input) {
  let count = 0;
  for (let i = n + 1; i <= n * 2; i++) {
    if (isPrime[i]) count++;
  }
  result.push(count);
}

console.log(result.join("\n"));
