const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const arr = [];

for (let i = 1; i <= N; i++) {
  const [age, name] = input[i].split(" ");
  arr.push([Number(age), name]);
}

arr.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  } else {
    return b[1] - a[1];
  }
});

for (let a of arr) {
  console.log(a.join(" "));
}
