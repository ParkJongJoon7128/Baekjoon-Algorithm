const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const S = input[0];
const set_arr = new Set();

for (let i = 0; i < S.length; i++) {
  for (let j = i; j < S.length; j++) {
    set_arr.add(S.substring(i, j + 1));
  }
}

console.log(set_arr.size);
