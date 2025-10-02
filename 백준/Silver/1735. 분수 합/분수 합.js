const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [a, b] = input[0].split(" ").map(Number);
const [c, d] = input[1].split(" ").map(Number);
const result = [];

let numer = a * d + b * c;
let denom = b * d;

let min = numer < denom ? numer : denom;

let i = 2;
while (i <= min) {
  if (numer % i === 0 && denom % i === 0) {
    numer /= i;
    denom /= i;

    min /= i;
    continue;
  }
  i++;
}

result.push(numer, denom);
console.log(result.join(" "));
