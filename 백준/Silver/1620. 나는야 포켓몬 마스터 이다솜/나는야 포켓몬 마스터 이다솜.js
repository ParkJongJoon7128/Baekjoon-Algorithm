const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input
    .shift()
    .split(" ")
    .map((n) => +n);

let map = new Map();

let answer = "";
for (let i = 0; i < input.length; ++i) {
    if (i < N) {
        map.set(`${i + 1}`, input[i]);
        map.set(input[i], `${i + 1}`);
    } else {
        answer += `${map.get(input[i])}\n`;
    }
}

console.log(answer);