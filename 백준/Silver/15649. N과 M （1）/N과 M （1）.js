const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const numbers = new Array(N).fill(0).map((v, i) => i + 1);
const visited = new Array(N).fill(false);
const result = [];

function backtracking(depth) {
  if (depth === M) {
    console.log(result.join(" "));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      result.push(numbers[i]);

      backtracking(depth + 1);
      visited[i] = false;
      result.pop();
    }
  }
}

backtracking(0);
