const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
let star = "";

function printStar(i, j, number) {
  if (i % 3 === 1 && j % 3 === 1) {
    star += " ";
  } else {
    if (number === 1) {
      star += "*";
    } else {
      printStar(parseInt(i / 3), parseInt(j / 3), parseInt(number / 3));
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    printStar(i, j, N);
  }
  star += "\n";
}

console.log(star);
