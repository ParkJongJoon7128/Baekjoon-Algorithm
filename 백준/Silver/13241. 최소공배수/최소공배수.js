const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let A = BigInt(input[0]);
let B = BigInt(input[1]);

let a = A;
let b = B;

while (b !== 0n) {
  let temp = a % b;
  a = b;
  b = temp;
}

let gcd = a;
let lcm = (A * B) / gcd;

console.log(lcm.toString());
