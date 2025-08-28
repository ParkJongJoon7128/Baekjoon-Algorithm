const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, X] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let result = "";

for (let i = 0; i < N; i++) {
  if (arr[i] < X) {
    result += arr[i] + " ";
  }
}

console.log(result);
