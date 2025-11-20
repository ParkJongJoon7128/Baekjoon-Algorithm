const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
let count = 0;
const arr = [];

function hanoi(number, from, other, to) {
  if (number === 0) {
    return;
  } else {
    hanoi(number - 1, from, to, other);
    arr.push([from, to]);
    count++;
    hanoi(number - 1, other, from, to);
  }
}

hanoi(N, 1, 2, 3);
console.log(count);
console.log(arr.map((a) => a.join(" ")).join("\n"));
