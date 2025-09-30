const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [A, B] = input[0].split(" ").map(Number);

const arr = input[1].split(" ").map(Number);
const arr2 = input[2].split(" ").map(Number);

const set_arr = new Set(arr);
const set_arr2 = new Set(arr2);

const result_arr = [];
const result_arr2 = [];

for (let s of set_arr) {
  if (!set_arr2.has(s)) {
    result_arr.push(s);
  }
}

for (let s of set_arr2) {
  if (!set_arr.has(s)) {
    result_arr2.push(s);
  }
}

console.log(result_arr.length + result_arr2.length);
