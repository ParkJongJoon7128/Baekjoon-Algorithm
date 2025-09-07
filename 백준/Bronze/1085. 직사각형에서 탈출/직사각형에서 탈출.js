const [x, y, w, h] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = [];

arr.push(x, y, w - x, h - y);
console.log(Math.min(...arr));
