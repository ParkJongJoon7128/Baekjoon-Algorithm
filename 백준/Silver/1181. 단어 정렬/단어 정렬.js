const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i]);
}

const set_arr = [...new Set(arr)];

set_arr.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  } else {
    return a.localeCompare(b);
  }
});

for (let i = 0; i < set_arr.length; i++) {
  console.log(set_arr[i]);
}
