const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1);

let answer = Infinity;

for (let r = 0; r <= N - 8; r++) {
  for (let c = 0; c <= M - 8; c++) {
    let countBstart = 0;
    let countWstart = 0;

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const cur = board[r + i][c + j];

        if ((i + j) % 2 === 0) {
          if (cur !== "B") countBstart++;
          if (cur !== "W") countWstart++;
        } else {
          if (cur !== "W") countBstart++;
          if (cur !== "B") countWstart++;
        }
      }
    }

    const localMin = Math.min(countBstart, countWstart);
    answer = Math.min(answer, localMin);
  }
}

console.log(answer);
