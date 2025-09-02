const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const [R, S] = input[i].split(" ");

  let str = "";
  for (let j = 0; j < S.length; j++) {
    str += S[j].repeat(R);
  }
  console.log(str);
}
