const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const N = Number(input);

let first_position = 1;
let result = 1;

while (first_position < N) {
  first_position += 6 * result;
  result++;
}

console.log(result);
