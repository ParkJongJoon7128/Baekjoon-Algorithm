const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let result = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      let current_value = arr[i] + arr[j] + arr[k];
      if (current_value <= M && current_value > result) {
        result = current_value;
      }
    }
  }
}

console.log(result);
