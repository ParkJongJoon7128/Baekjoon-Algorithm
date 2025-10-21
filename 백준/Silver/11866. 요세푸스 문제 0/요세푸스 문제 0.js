const [N, K] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const q = Array.from({ length: N }, (_, i) => i + 1);
const answer = [];

while (q.length) {
  for (let i = 0; i < K; i++) {
    q.push(q.shift());
  }

  answer.push(q.pop());
}
console.log("<" + answer.join(", ") + ">");
