const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .toLowerCase();

const count = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  const idx = input.charCodeAt(i) - 97;
  count[idx]++;
}

const max = Math.max(...count);
const maxIndexes = [];

for (let i = 0; i < count.length; i++) {
  if (count[i] === max) {
    maxIndexes.push(i);
  }
}

const result =
  maxIndexes.length > 1 ? "?" : String.fromCharCode(maxIndexes[0] + 65);

console.log(result);
