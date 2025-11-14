const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const arr = [];
const hashSet = new Set();
let count = 0;

for (let i = 1; i <= N; i++) {
  arr.push(input[i]);
}

for (let j = 0; j < arr.length; j++) {
  if (!hashSet.has(arr[j])) {
    hashSet.add(arr[j]);

    if (arr[j] !== "ENTER") {
      count++;
    } else {
      hashSet.clear();
    }
  }
}

console.log(count);
