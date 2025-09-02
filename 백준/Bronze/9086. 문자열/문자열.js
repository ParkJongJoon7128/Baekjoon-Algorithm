const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const str = input[i];

  const first = str[0];
  const last = str[str.length - 1];

  console.log(first + last);
}
