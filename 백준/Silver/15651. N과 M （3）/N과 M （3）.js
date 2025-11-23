const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
let str = "";
const result = [];

function backtracking(depth) {
  if (depth === M) {
    str += `${result.join(" ")}\n`;
    return;
  }

  for (let i = 0; i < N; i++) {
    result.push(i + 1);
    backtracking(depth + 1);
    result.pop();
  }
}

backtracking(0);
console.log(str);
