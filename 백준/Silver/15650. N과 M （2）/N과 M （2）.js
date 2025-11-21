const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const result = [];

function backtracking(depth, start) {
  if (depth === M) {
    console.log(result.join(" "));
    return;
  }

  for (let i = start; i <= N; i++) {
    result.push(i);
    backtracking(depth + 1, i + 1);
    result.pop();
  }
}

backtracking(0, 1);
