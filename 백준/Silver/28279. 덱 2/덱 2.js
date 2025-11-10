const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const deque = {};
const result = [];

let front = 0;
let back = 0;

for (let i = 1; i <= N; i++) {
  const str = input[i].split(" ").map(Number);

  switch (str[0]) {
    case 1:
      deque[--front] = str[1];
      break;
    case 2:
      deque[back++] = str[1];
      break;
    case 3:
      result.push(front === back ? -1 : deque[front++]);
      break;
    case 4:
      result.push(front === back ? -1 : deque[--back]);
      break;
    case 5:
      result.push(back - front);
      break;
    case 6:
      result.push(front === back ? 1 : 0);
      break;
    case 7:
      result.push(front === back ? -1 : deque[front]);
      break;
    case 8:
      result.push(front === back ? -1 : deque[back - 1]);
      break;
  }
}

console.log(result.join("\n"));
