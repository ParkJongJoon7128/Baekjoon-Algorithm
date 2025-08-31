const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const line1 = input[0].split(" ");
const arr = input[1].split(" ");

const N = Number(line1[0]);
const X = Number(line1[1]);

let result = "";

for (let i = 0; i < N; i++) {
  if (arr[i] < X) {
    result += arr[i] + " ";
  }
}

console.log(result);
