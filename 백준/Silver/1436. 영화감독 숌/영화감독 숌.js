const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = Number(input[0]);
let title = 666;

while (1) {
  if (title.toString().includes("666")) {
    N -= 1;
    if (N === 0) {
      break;
    }
  }

  title += 1;
}

console.log(title);
