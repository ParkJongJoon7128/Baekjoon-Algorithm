const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());
const arr = [];
const result = [];

for (let i = 0; i < T; i++) {
  arr.push(input[i]);
  let count = 0;

  for (let a of arr[i]) {
    if (a === "(") {
      count += 1;
    } else {
      count -= 1;
    }

    if (count < 0) {
      break;
    }
  }

  result.push(count === 0 ? "YES" : "NO");
}

console.log(result.join("\n"));
