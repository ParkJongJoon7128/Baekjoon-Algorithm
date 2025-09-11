const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

const arr = input[1].split(" ").map(Number);
let set_arr = [...new Set(arr)].sort((a, b) => a - b);

let set_arr_obj = {};

for (let i = 0; i < set_arr.length; i++) {
  set_arr_obj[set_arr[i]] = i;
}

let result = "";

for (let i = 0; i < N; i++) {
  result += set_arr_obj[arr[i]] + " ";
}

console.log(result);
