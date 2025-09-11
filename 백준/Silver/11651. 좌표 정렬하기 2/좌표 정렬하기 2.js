const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

const arr = [];

for (let i = 1; i <= N; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  arr.push([a, b]);
}

arr.sort((p1, p2) => {
  if (p1[1] !== p2[1]) {
    return p1[1] - p2[1];
  } else {
    return p1[0] - p2[0];
  }
});

for (let a of arr) {
  console.log(a.join(" "));
}
