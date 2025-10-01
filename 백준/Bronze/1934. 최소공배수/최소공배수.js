const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
const result = [];

for (let i = 1; i <= T; i++) {
  const [A, B] = input[i].split(" ").map(Number);

  let a = A,
    b = B;

  while (b !== 0) {
    let temp = a % b;
    a = b;
    b = temp;
  }

  let gcd = a;
  let lcm = (A * B) / gcd;

  result.push(lcm);
}

console.log(result.join("\n"));
