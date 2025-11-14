const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const hash = new Set();

const ChongChong = "ChongChong";
hash.add(ChongChong);

for (let i = 1; i <= N; i++) {
  const [A, B] = input[i].split(" ");

  if (A === ChongChong || B === ChongChong || hash.has(A) || hash.has(B)) {
    hash.add(A);
    hash.add(B);
  }
}

console.log(hash.size);
