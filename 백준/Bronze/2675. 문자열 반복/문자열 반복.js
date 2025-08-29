const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let [R, S] = input[i].split(" ");

  R = Number(R);
  let result = "";

  for (let j = 0; j < S.length; j++) {
    result += S[j].repeat(R);
  }

  console.log(result);
}
