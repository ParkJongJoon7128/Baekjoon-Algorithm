const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [a, b, c, d, e, f] = input[0].split(" ").map(Number);

const D = a * e - b * d;
const Dx = c * e - b * f;
const Dy = a * f - c * d;
const x = Dx / D;
const y = Dy / D;

console.log(`${x} ${y}`);
