const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
let array = [];

for (let i = 1; i <= N; i++) {
  array.push(i);
}

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  let tempArr = [];

  for (let j = a - 1; j < b; j++) {
    tempArr.push(array[j]);
  }

  tempArr.reverse();
  array.splice(a - 1, b - a + 1, ...tempArr);
}

console.log(array.join(' '));
