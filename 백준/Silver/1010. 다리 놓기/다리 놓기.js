const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
const result = [];

for (let i = 1; i <= T; i++) {
  const [N, M] = input[i].split(" ").map(Number);

  let ans = 1;
  for (let j = 0; j < N; j++) {
    ans = (ans * (M - j)) / (j + 1);
  }

  result.push(Math.round(ans));
}

console.log(result.join("\n"));
