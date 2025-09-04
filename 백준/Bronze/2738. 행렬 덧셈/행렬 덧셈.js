let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const A = [];
const B = [];
const result = [];

for (let i = 1; i <= N; i++) {
  A.push(input[i].split(" ").map(Number));
}

for (let i = N + 1; i <= 2 * N; i++) {
  B.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < N; i++) {
  const row = [];
  for (let j = 0; j < M; j++) {
    row.push(A[i][j] + B[i][j]);
  }
  result.push(row);
}

for (let i = 0; i < N; i++) {
  console.log(result[i].join(" "));
}
