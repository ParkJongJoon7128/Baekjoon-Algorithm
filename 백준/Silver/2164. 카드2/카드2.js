const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const queue = Array.from({ length: N }, (_, i) => i + 1);

let head = 0;

while (queue.length - head > 1) {
  head++;
  queue.push(queue[head++]);
}

console.log(queue[head]);
