let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = [];
const result = [];

for (let i = 0; i < 5; i++) {
  arr.push(input[i].split(""));
}

const maxLength = Math.max(...arr.map((a) => a.length));
for (let j = 0; j < maxLength; j++) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][j]) {
      result.push(arr[i][j]);
    }
  }
}

console.log(result.join(""));
