const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);

function factorial(number) {
  let answer = 1;

  for (let i = 2; i <= number; i++) {
    answer *= i;
  }

  return answer;
}

console.log(factorial(N) / (factorial(K) * factorial(N - K)));
