const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

let result = [];
for (let i of input) {
  while (!isPrime(i)) {
    i++;
  }
  result.push(i);
}

console.log(result.join("\n"));
