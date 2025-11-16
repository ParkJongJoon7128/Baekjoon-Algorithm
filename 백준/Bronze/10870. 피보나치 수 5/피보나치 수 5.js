const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);

function Fibonachi(number) {
  if (number === 0) {
    return 0;
  } else if (number === 1) {
    return 1;
  } else {
    return Fibonachi(number - 1) + Fibonachi(number - 2);
  }
}

console.log(Fibonachi(n));
