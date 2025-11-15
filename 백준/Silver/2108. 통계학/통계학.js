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

const sum = arr.reduce((a, c) => a + c, 0);
const avg = Math.round(sum / arr.length);

arr.sort((a, b) => a - b);
const middle = arr[Math.floor(arr.length / 2)];

const map = new Map();
for (let a of arr) {
  if (!map.has(a)) {
    map.set(a, 1);
  } else {
    map.set(a, map.get(a) + 1);
  }
}
let maxCount = 0;
let arr2 = [];
map.forEach((ele, key) => {
  if (maxCount < ele) {
    maxCount = ele;
    arr2 = [];
    arr2.push(key);
  } else if (maxCount === map.get(key)) {
    arr2.push(key);
  }
});

const max = Math.max(...arr);
const min = Math.min(...arr);
const range = max - min;

console.log(avg === -0 ? 0 : avg);
console.log(middle);
console.log(arr2.length > 1 ? arr2[1] : arr2[0]);
console.log(range);
