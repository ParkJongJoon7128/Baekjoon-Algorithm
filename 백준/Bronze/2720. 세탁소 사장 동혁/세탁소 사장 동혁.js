const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const coin = [25, 10, 5, 1];
const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let C = Number(input[i]);
  const arr = [];

  for (let j = 0; j < coin.length; j++) {
    arr.push(Math.floor(C / coin[j]));
    C %= coin[j];
  }

  console.log(arr.join(" "));
}
