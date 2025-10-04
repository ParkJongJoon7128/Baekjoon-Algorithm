const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(Number(input[i]));
}

arr.sort((a, b) => a - b);

const arrange_arr = [];
for (let j = 0; j < arr.length - 1; j++) {
  arrange_arr.push(arr[j + 1] - arr[j]);
}

let gcd = arrange_arr[0];
for (let k = 1; k < arrange_arr.length; k++) {
  let a = gcd;
  let b = arrange_arr[k];

  while (b !== 0) {
    const temp = a % b;
    a = b;
    b = temp;
  }

  gcd = a;
}

const totalDistance = arr[arr.length - 1] - arr[0];
const result = totalDistance / gcd - (N - 1);

console.log(result);
