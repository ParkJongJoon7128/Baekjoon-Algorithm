const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const map = new Map();
const arr = [];

for (let i = 1; i <= n; i++) {
  const [name, isVisit] = input[i].split(" ");
  map.set(name, isVisit);
}

for (let key of map.keys()) {
  if (map.get(key) === "enter") {
    arr.push(key);
  }
}

arr.sort().reverse();

console.log(arr.join("\n"));
