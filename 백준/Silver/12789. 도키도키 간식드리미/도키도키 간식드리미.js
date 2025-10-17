const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const stack = [];

let want = 1;

while (arr.length > 0 || stack.length > 0) {
  if (arr[0] === want) {
    arr.shift();
    want++;
  } else if (stack[stack.length - 1] === want) {
    stack.pop();
    want++;
  } else if (arr.length > 0) {
    stack.push(arr.shift());
  } else {
    break;
  }
}

if (want === N + 1) {
  console.log("Nice");
} else {
  console.log("Sad");
}
